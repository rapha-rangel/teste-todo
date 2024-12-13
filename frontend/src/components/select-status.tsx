import { useState } from "react"
import styled from "styled-components"
import { StatusType } from "../types/tarefas-types"

interface IconTagTypes {
  $changeselected: boolean
}
interface DropDownHeaderTypes{
  $open:boolean
  $seleted:StatusType
}

interface ListItemProps{
  $colorHover: number
  $open:boolean
}
interface DropDownListProps{
  $open:boolean
}


const DropDownContainer = styled.div`
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  h4{
    font-size: 1.2rem;
    font-weight: 500;
    color: #FFFFFF;
    margin-bottom: 5px;
  }
`
const DropDownHeader = styled.div<DropDownHeaderTypes>`
  max-width: 100%;

  position: relative;
  box-shadow: ${({$open})=> $open?"1px 1px 4px 2px rgba(0, 0, 0, 0.25);":"0px 10px 20px 2px rgba(0, 0, 0, 0.25)"};
  background-color: ${({$seleted})=>$seleted===StatusType.DONE?"#c7e6b8":$seleted===StatusType.PROGRESS?"#e6a544":$seleted===StatusType.STOPED?"#f06d56": "#ffffff"};
  border-radius: 5px;
  padding: 12px 10px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: ${({$seleted})=> $seleted ===StatusType.DONE||$seleted ===StatusType.PROGRESS||$seleted ===StatusType.STOPED? "600":"500"} ;
  color:${({$seleted})=> $seleted ===StatusType.DONE||$seleted ===StatusType.PROGRESS||$seleted ===StatusType.STOPED? "#161515":"#a09f9f"};
  transition: all .5s ease-in-out;
  cursor: pointer;
  z-index: 100;
`
const DropDownListContainer = styled.div`
  position: relative;
  max-width:100%;
`
const DropDownList = styled.ul<DropDownListProps>`
  position: absolute;
  width: 100%;
  left:0;
  display: ${({$open})=> $open?"block":"none"};
  background: white;   
  border-top: none;
  z-index: 30;
  top: -5px;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  &:hover{
    border-color: #84aef7;
  }
  &:last-child {
    border-radius:0px 0px 8px 8px ;
  }
  
`
const ListItem = styled.li<ListItemProps>`
  list-style: none;
  padding: 10px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  color: #4D4D4D;
  z-index: 20;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:first-child {
      padding-top:15px ;
    }
  &:hover{
    background-color:${({$colorHover})=>$colorHover===0?"#c7e6b8":$colorHover===1?"#e6a544":"#f06d56"};
    color: black;
    
    &:last-child {
      border-radius:0px 0px 8px 8px ;
    }
  }

`
const IconTag = styled.div<IconTagTypes>`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%) ${({$changeselected})=>$changeselected?"rotate(90deg)":"rotate(360deg)"} ;
  transition: all 0.5s ease-in-out;
  font-size: 1.6rem;
  color: #4D4D4D;
`
const InputRequired= styled.input`
  position: absolute;
  bottom:5%;
  transform: translateX(-50%);
  z-index: 0;
  left:50%;
`
const options = ["Feito", "Em progresso", "Parado"];

interface SelectStatusProps{
 handleChange:(value: number, name: string) => void
 name: string
 value: number
}

export default function SelectStatus({ handleChange, name, value}: SelectStatusProps){
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const choisedOption =(index: number) => {
    setSelectedOption(index);
    handleChange(index, name)
    setIsOpen(false);
    console.log(selectedOption, isOpen);
  };

  return(
    <DropDownContainer >
      <h4>Selecione o progresso do projeto</h4>
      <InputRequired required={selectedOption ===3}/>
      <DropDownHeader 
        $open={isOpen}
        $seleted={selectedOption}
        onClick={() => setIsOpen(prev=> !prev)}>
          {value===StatusType.DONE? "Feito":value===StatusType.PROGRESS? "Em progresso":value===StatusType.STOPED? "Parado": "Selecione um status"}
          <IconTag
            $changeselected={isOpen}>+</IconTag>
      </DropDownHeader>
        <DropDownListContainer>
          <DropDownList $open={isOpen}>
            {options && options.map((option:string, index:number)=>(
              <ListItem
                $colorHover={index}
                value={index}
                $open={isOpen}
                key={index}
                onClick={()=>choisedOption(index)}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  )
}