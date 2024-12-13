import styled from "styled-components"
import { DefaultLayout } from "../components/defualt-page-layout"
import CardBox from "../components/cards-box"
import useFetchTarefas from "../hooks/useFetchTarefas"
import Button from "../components/button"
import { ActionType } from "../types/action-types"
import { useNavigate } from "react-router-dom";
import Loading from "../components/loading"

const MainSection = styled.section`
  font-family: ${props => props.theme.font.family};
  padding: 5% 5%  0 5%;
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    margin: auto;
  }
  @media (min-width: ${props=> props.theme.largeBreakpoint}){
    width:1280px;
  }
`

const MainTitle = styled.h2`
  font-size: ${props => props.theme.font.size.title};
  font-weight: ${props => props.theme.font.weight.semibold};
  text-align: center;
  color: #252525;
  margin-bottom: 40px;
`

const ButtonBox=styled.div`
  text-align: end;
  margin-bottom: 20px;
  transform: translateY(-30px);
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    text-align: end;
    transform: translateY(-50px);
    margin-bottom: 0;
  }
`
const MessageNoTodo =styled.h3`
  text-align: center;
  vertical-align: center;
  font-size: ${props => props.theme.font.size.large};
  font-weight: ${props => props.theme.font.weight.semibold};
`

export default function Main(){
  const navigate = useNavigate();
  const {data, loadingDate} = useFetchTarefas();

  const handleNavigate =()=>{
    navigate("/create", {
      state:{
        action:ActionType.CREATE,
    }});
  };
  return (
    <DefaultLayout>
      <MainSection>
      <MainTitle>Lista de Tarefas</MainTitle>
        <ButtonBox>
          <Button
            loading={false}
            name={"Criar"}
            type={"button"}
            handleClick={handleNavigate}/>
        </ButtonBox>
        {loadingDate?
        <Loading
          size={"large"}/>:
        data.length>0 ? data.map((tarefasArray:any, index: number)=>(
        <CardBox
          tarefasArray={tarefasArray}
          index={index}/>
        )):<MessageNoTodo>
          Não existe Tarefas
          </MessageNoTodo>}
      </MainSection>
    </DefaultLayout>
  )
}