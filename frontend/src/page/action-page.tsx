import styled from "styled-components"
import InputText from "../components/input-text"
import { DefaultLayout } from "../components/defualt-page-layout"
import SelectStatus from "../components/select-status"
import InputDate from "../components/input-date"
import Button from "../components/button"
import { createTarefas, deleteTarefas, updateTarefas } from "../api"
import { ChangeEvent, FormEvent, useState } from "react"
import ChoiseRating from "../components/choise-rating"
import { ActionType } from "../types/action-types"
import { useLocation, useNavigate } from "react-router-dom";
import { formatedAmericanDate } from "../utils/formated-date"

interface ActionPageTitleProps{
 $color: ActionType
}

const ActionPageForm = styled.form`
  padding: 5%;
  margin: auto;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 28px;
  :nth-of-type(2){
    flex-direction: column-reverse;
  }
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    width: 800px;
  }
`

const ActionPageTitle = styled.h3<ActionPageTitleProps>`
  font-size: 3rem;
  color: black;
  font-weight: 600;
  span {
    text-decoration: underline white 5px;
    text-underline-offset: 8px;
    text-decoration-color: ${props=> props.$color ===ActionType.CREATE? `${props.theme.colors.buttons[0]}`:props=> props.$color ===ActionType.UPDATE?`${props.theme.colors.buttons[1]}`:`${props.theme.colors.buttons[2]}`};
  }
  `
const Line = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:24px;
  width: 100%;
  justify-content: space-around;
  
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    flex-direction: row;
  }
 
`

const MessageDelete= styled.h3`
  font-size: ${props=> props.theme.font.size.medium};
  font-weight: ${props=> props.theme.font.weight.normal};
  vertical-align: middle; 
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
      font-size: ${props=> props.theme.font.size.large};
      font-weight: ${props=> props.theme.font.weight.normal};
    }
` 

const ButtonsLine = styled.div`
  display: flex;
  gap:50px;
  width: 100%;
  justify-content: center;
`

export default function ActionPage (){
  const location = useLocation();
  const navigate = useNavigate();
  const { list, action } = location.state || {};
  const [loadingButton, setLoadingButton]= useState(false);
  const [inputValue, setInputValue] = useState({
    _id:list?list._id:"",
    todoName:list?list.todoName:"",
    person:list?list.person:"",
    status:list?list.status:3,
    limitDate:list?formatedAmericanDate(list.limitDate):"",
    priority:list?list.priority:0,
    createDate:list?list.createDate:""
  });



  const resteInput =()=>{
    setInputValue({
      _id:"",
      todoName:"",
      person:"",
      status:0,
      limitDate:"",
      priority:0,
      createDate: ""
      })
  }


  const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(action ===ActionType.CREATE){
      try{
        const res = await createTarefas(inputValue, setLoadingButton);
          if(res ===201){
            setTimeout(()=>{
              setLoadingButton(false);
            },1000)
            resteInput();
            handleBack();
          }
        } catch(e){
          console.log(e)
        }
    } else if(action ===ActionType.UPDATE){
      try{
      const res = await updateTarefas(inputValue, setLoadingButton);
          if(res===200){
            setTimeout(()=>{
              setLoadingButton(false);
            },1000)
            resteInput();
            handleBack();
          }
      } catch(e){
        console.log(e)
      }
    }else{
      try{
        const res = await deleteTarefas(inputValue, setLoadingButton);
            if(res===200){
              setTimeout(()=>{
                setLoadingButton(false);
              },1000)
              resteInput();
              handleBack();
            }
        } catch(e){
          console.log(e)
        }
    }
  }

  const handleSelectChange=(value: number, name: string)=>{
    setInputValue({...inputValue, [name]:value})
    console.log(inputValue)

  }

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setInputValue({...inputValue, [name]: value})
    console.log(inputValue)
  }

  const handleBack =()=>{
    navigate("/");
  };

  return(
    <DefaultLayout>
      <ActionPageForm onSubmit={(e)=>handleSubmit(e)}>
        <ActionPageTitle
          $color={action}>
          <span>{ActionType.CREATE===action?"Crier":ActionType.UPDATE===action?"Atualize":"Delete"}</span> sua Tarefa</ActionPageTitle>
          {ActionType.DELETE !== action?
          <>
          <Line>
            <InputText
              title={"Tarefas"}
              placeholderText={"Nome da tarefa"}
              name={"todoName"}
              value={inputValue.todoName}
              handleChange={handleChange}
              />
            <InputText
              name={"person"}
              title={"Responsavel"}
              value={inputValue.person}
              placeholderText={"Nome da responsavel"}
              handleChange={handleChange}/>
          </Line>
          <Line>
            <SelectStatus
              value={inputValue.status}
              name={"status"}
              handleChange={handleSelectChange}
              />
            <InputDate
              name={"limitDate"}
              value={inputValue.limitDate}
              title={"Data Limite"}
              handleChange={handleChange}/>
          </Line>
          <Line>
            <ChoiseRating
              name={"priority"}
              value={inputValue.priority}
              handleChange={handleSelectChange}/>
          </Line>
          </>
          :<MessageDelete>Você quer deletar a tafera {list.todoName}?</MessageDelete>
          }
        <ButtonsLine>
          <Button
            loading={loadingButton}
            handleClick={()=>{}}
            name={ActionType.CREATE===action?"Criar":ActionType.UPDATE===action?"Atualizar":"Deletar"}
            type={"submit"}/>
          <Button
            loading={false}
            handleClick={handleBack}
            name={"Voltar"}
            type={"button"}/>
        </ButtonsLine>
      </ActionPageForm>
    </DefaultLayout>
  )
}