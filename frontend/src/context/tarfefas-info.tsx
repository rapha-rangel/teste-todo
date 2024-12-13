import {createContext, useState, ReactNode} from "react";
import { ToDoListTypes, StatusType } from "../types/tarefas-types";

export const TarefasInfoContext = createContext({
  tarefasInfo:{
    _id:"",
    todoName: "",
    person: "",
    status:StatusType.DONE,
    limitDate: "",
    priority:0,
    createDate: ""
  },
  choisedTarefasInfo: (value: ToDoListTypes)=> {}
})

interface ProviderProps{
  children: ReactNode
}

export function TarefasInfoContextProvider({children}: ProviderProps){

  const [tarefasInfo, setTarefasInfo] = useState<ToDoListTypes>({
    _id:"",
    todoName: "",
    person: "",
    status:StatusType.DONE,
    limitDate: "",
    priority:0,
    createDate: ""
  });

  const choisedTarefasInfo =(value:ToDoListTypes)=>{
    setTarefasInfo(value);
  }


  return (
    <TarefasInfoContext.Provider
      value={{
        tarefasInfo,choisedTarefasInfo
      }}
    >
      {children}
    </TarefasInfoContext.Provider>
  )
}