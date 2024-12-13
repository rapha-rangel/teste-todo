import styled, { css, keyframes } from "styled-components";
import { StatusType, TarefasTitleType, ToDoListTypes } from "../types/tarefas-types";
import { FaPen, FaTrash } from "react-icons/fa";
import { formatRating } from "../utils/format-rating";
import { rangeTimeline } from "../utils/range-timeline";
import { formatedDate } from "../utils/formated-date";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionType } from "../types/action-types";

interface CardStatusProps{
  $status: number
}

interface CardDivProps{
  $borderColor: number
}

interface CardTimeline{
  $borderColor: number
  $range: number
}

interface ActionsButtonsProps{
  $show:boolean|null
}

const showActionsButtons =()=> keyframes`
  0% { opacity:0; transform:translatex(-50px); }
  100%{  opacity:1;  transform:translatex(-5px); }
`

const hiddenActionsButtons =()=> keyframes`
  0% { opacity:1; transform:translatex(0); }
  100%{  opacity:0;transform:translatex(-50px); }
`

const CardDiv = styled.tr<CardDivProps>`
  height: 61px;
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    height: 68px;
    }
  td{
    &:first-of-type{
      border-left: 6px solid ${props=> props.theme.colors.border[props.$borderColor]};
    }
  }
`

const TextTable = styled.td`
  font-size: ${props=> props.theme.font.size.medium};
  font-weight: ${props=> props.theme.font.weight.normal};
  vertical-align: middle; 
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
      font-size: ${props=> props.theme.font.size.large};
      font-weight: ${props=> props.theme.font.weight.normal};
    }
`

const CardTarefa = styled(TextTable)`
  padding: 10px;
  padding-left: 15px;
  background-color: #e1e9f7;
  max-width:15px;
  width: 30%;
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    max-width:300px;
  }
  p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const CardResponsavel = styled(TextTable)`
  background-color: #e1e9f7;
  width:15%;
  text-align: center; 
  vertical-align: middle; 
  text-align: center;
  max-width: 50px;
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    width:10%;
  }
  p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const CardStatus = styled(TextTable)<CardStatusProps>`
  background-color:${props=> props.$status === StatusType.DONE?"#0fbe0f":props.$status === StatusType.PROGRESS?"#FFA500":"#e92019"};
  color: white;
  text-align: center;
  width: 15%;
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    width: 10%;
  }
`
const CardTimeline = styled.td<CardTimeline>`
  padding:10px 20px;
  margin: 0 2px;
  display: none;
  background-color: #e1e9f7;
  text-align: center;
  vertical-align: middle; 
  width:25%;
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
      display: table-cell;
    }
  div{
    position: relative;
    height: 15px;
    border-radius: 5px;
    background-color: #b3afaf;
    width: 100%;
    span{
      position: absolute;
      left: 0;
      width: ${props=> props.$range >= 100?"100":props.$range<=1||props.$range <=5?"2":props.$range}%;
      background-color: ${props=> props.theme.colors.border[props.$borderColor]};
      height: 100%;
      border-start-start-radius: 5px;
      border-end-start-radius: 5px;
      border-start-end-radius: ${props=> props.$range <= 0?"5px":"0px"};
      border-end-end-radius: ${props=> props.$range <= 0?"5px":"0px"};
    }
  }
`
const CardPriority = styled.td`
  font-weight: ${props=> props.theme.font.weight.medium};
  background-color: #e1e9f7;
  text-align: center;
  vertical-align: middle; 
  width:15%;
  font-size: ${props=> props.theme.font.size.small};
  @media (min-width: ${props=> props.theme.headerBreakPoint}){
    font-size: ${props=> props.theme.font.size.smallMedium};
    width:20%;
  }
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    font-size: ${props=> props.theme.font.size.large};
    width:15%;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
  }
`
const CardDeliveryTime = styled.td`
  padding:10px;
  font-weight: 500;
  background-color: #e1e9f7;
  text-align: center;
  vertical-align: middle; 
  width:20%;
  font-size: 0.8rem;
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    font-size: 1em;
    width:10%;
  }
`
const ActionButtons = styled.td<ActionsButtonsProps>`
  padding:5px;
  position: absolute;
  text-align: center; 
  vertical-align: middle;
  opacity:0;
  transform:translatex(-50px);
  ${props =>{
    if(props.$show ===true){
      return css`
        animation:${showActionsButtons} 1s ease forwards;
      `
    }else if(props.$show ===false){
      return css`
        animation:${hiddenActionsButtons} 1s ease forwards;
      `
    } else{
      return css`
      `
    }}};
  background-color:#e1e9f7;
  font-size: 0.8rem;
  @media (min-width: ${props=> props.theme.laptopBreakpoint}){
    font-size: 1em;
  }
  svg{
    transition: all .2s ease-in-out;
    cursor: pointer;
    margin: 5px;
    &:first-child{
      &:hover{
        fill:green;
      }
    }
    &:hover{
        fill:red;
      }
  }
`

interface CardProps{
  list:ToDoListTypes
  index: number
  themeColor:TarefasTitleType
}

export default function Card({list, themeColor}: CardProps){
  const [showActionsButtons, setShowActionsButtons]= useState<boolean | null>(null);
  const navigate = useNavigate();
  const handleUpdate=()=>{
    navigate("/create", {
      state:{
        action:ActionType.UPDATE,
        list
    }});
  }

  const handleDelete=()=>{
    navigate("/create", {
      state:{
        action:ActionType.DELETE,
        list
    }});
  }

  return (
    <CardDiv 
      $borderColor={themeColor}
      onMouseEnter={() => setShowActionsButtons(true)}
      onMouseLeave={() => setShowActionsButtons(false)}
      >
      <CardTarefa><p>{list.todoName}</p></CardTarefa>
      <CardResponsavel><p>{list.person}</p></CardResponsavel>
      <CardStatus $status={list.status}>
        {list.status ===StatusType.DONE?"Feito":list.status ===StatusType.PROGRESS?"Em andamento":"Parado"}
      </CardStatus>
      <CardTimeline $borderColor={themeColor} $range={rangeTimeline(list.createDate, list.limitDate)}>
        <div>
          <span></span>
        </div>
      </CardTimeline>
      <CardDeliveryTime>{formatedDate(list.limitDate)}</CardDeliveryTime>
      <CardPriority>
        {formatRating(list.priority)}
      </CardPriority>
      <ActionButtons
        $show={showActionsButtons} >
        <FaPen
          onClick={handleUpdate}/>
        <FaTrash
          onClick={handleDelete}/>
      </ActionButtons>
    </CardDiv>
      
  )
}