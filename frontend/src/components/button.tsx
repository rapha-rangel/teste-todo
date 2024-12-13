import styled from "styled-components"
import Loading from "./loading"
import { MouseEventHandler } from "react"
interface ButtonBoxProps{
  $color: string
}

const ButtonBox= styled.button<ButtonBoxProps>`
  width: 150px;
  padding: 10px;
  border: 2px solid ${props=> props.$color ==="Criar"? `${props.theme.colors.buttonsBorder[0]}`:props=> props.$color ==="Atualizar"?`${props.theme.colors.buttons[1]}`:props=> props.$color ==="Deletar"?`${props.theme.colors.buttonsBorder[2]}`:`${props.theme.colors.buttonsBorder[3]}`};
  font-size: ${props=> props.theme.font.size.large};
  border-radius: 5px;
  transition: all .5s ease-in-out;
  background-color: ${props=> props.$color ==="Criar"? `${props.theme.colors.buttons[0]}`:props=> props.$color ==="Atualizar"?`${props.theme.colors.buttons[1]}`:props=> props.$color ==="Deletar"?`${props.theme.colors.buttons[2]}`:`${props.theme.colors.buttons[3]}`};
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover{
    background-color: ${props=> props.$color ==="Criar"? `${props.theme.colors.hoverBorder[0]}`:props=> props.$color ==="Atualizar"?`${props.theme.colors.hoverBorder[1]}`:props=> props.$color ==="Deletar"?`${props.theme.colors.hoverBorder[2]}`:`${props.theme.colors.hoverBorder[3]}`};
    transform: translateY(5px);
  }
`

interface ButtonProps{
  type: "submit" | "button"
  name:string
  handleClick:MouseEventHandler<HTMLButtonElement>
  loading: boolean
}

export default function Button({type, name,handleClick, loading}:ButtonProps ){
  return(
    <ButtonBox
      $color={name}
      onClick={handleClick}
      type={type}>
        {loading? <Loading size={"small"}/>:name}
    </ButtonBox>
  )
}