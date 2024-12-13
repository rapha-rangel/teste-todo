import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { Dispatch, SetStateAction } from "react";
import { ToDoListTypes } from "../types/tarefas-types";


const url = "http://localhost:4000";
const config: AxiosRequestConfig = {
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  } as RawAxiosRequestHeaders,
};

export const getAllTarefas =async ()=>{
  try{
    const response =await axios.get(`${url}/todos`,config);
    console.log(response)
    return response.data.todos;
  } catch(e){
    console.log(e)
  }
}

export const createTarefas =async (value:ToDoListTypes, setLoadingButton:Dispatch<SetStateAction<boolean>>)=>{
  const todo ={
    todoName: value.todoName,
    person: value.person,
    status: value.status,
    limitDate: new Date(value.limitDate),
    priority: value.priority,
    createDate: new Date()
  }
  try{
    setLoadingButton(true);
    const response =await axios.post(`${url}/add`,todo, config);
    console.log(response)
    return response.status;
  } catch(e){
    console.log(e)
  }
}

export const updateTarefas =async (value:ToDoListTypes, setLoadingButton:Dispatch<SetStateAction<boolean>>)=>{
  const id=value._id;
  const todo ={
    todoName: value.todoName,
    person: value.person,
    status: value.status,
    limitDate: new Date(value.limitDate),
    priority: value.priority,
    createDate: new Date()
  }
  try{
    setLoadingButton(true);
    const response =await axios.put(`${url}/edit/${id}`,todo, config);
    console.log(response)
    return response.status;
  } catch(e){
    console.log(e)
  }
}

export const deleteTarefas =async (value:ToDoListTypes, setLoadingButton:Dispatch<SetStateAction<boolean>>)=>{
  const id=value._id;
  try{
    setLoadingButton(true);
    const response =await axios.delete(`${url}/delete/${id}`, config);
    console.log(response)
    return response.status;
  } catch(e){
    console.log(e)
  }
}



