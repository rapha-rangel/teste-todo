import styled from "styled-components"
import { TarefasTitleType, ToDoListTypes } from "../types/tarefas-types"
import Card from "./card"

interface TitleCardHeadProps{
  $color: number
}

const Table = styled.table`
  width: 100%;
  margin-bottom: 50px;
  border-collapse: separate;
  border-spacing: 0.3rem 0.3rem;
  tbody{
    position: relative;
  }
`
const TableHead = styled.thead<TitleCardHeadProps>`
  tr{
    th{
      &:first-child{
        text-align: left;
        color: ${props=> props.theme.colors.border[props.$color]};
        font-size: ${props=> props.theme.font.size.large};
        font-weight: ${props => props.theme.font.weight.normal};
        transform: translateY(-10px);
        @media (min-width: ${props=> props.theme.laptopBreakpoint}){
          font-size: 2rem;
        }
      }
      &:nth-child(4){
        display: none;
        @media (min-width: ${props=> props.theme.laptopBreakpoint}){
          display: table-cell;
        }
      }
      color: black;
      font-weight:${props => props.theme.font.weight.normal};
      font-size: ${props=> props.theme.font.size.smallMedium};
      transform: translateY(-5px);
    }
  }
`

interface CardBoxProps {
  tarefasArray: {title:TarefasTitleType, array:ToDoListTypes[]}
  index: number
}

export default function CardBox({tarefasArray, index}: CardBoxProps){
  return(
    <div>
      <Table>
        <TableHead $color={tarefasArray.title}>
          <tr>
            <th>
            {tarefasArray.title===TarefasTitleType.PASSEDDEADLINE?"Já passado":
              tarefasArray.title===TarefasTitleType.THISMONTH?"Este mês":
              tarefasArray.title===TarefasTitleType.NEXTMONTH?"Próximo mês":
              tarefasArray.title===TarefasTitleType.INTWOMONTH?"2 meses":"3 meses ou +"}
            </th>
            <th>Res.</th>
            <th>Status</th>
            <th>Tempo</th>
            <th>Data Limite</th>
            <th>Prioridade</th>
          </tr>
        </TableHead>
        <tbody>
          {tarefasArray.array && tarefasArray.array.map((tarefa:ToDoListTypes)=>(
              <Card
              themeColor={tarefasArray.title}
              list={tarefa}
              index={index}/>
            ))}
        </tbody>
      </Table>
    </div>
  )
}