export interface dataFetch{
  title:TarefasTitleType
  array:ToDoListTypes[]
}

export interface ToDoListTypes{
  _id:string
  todoName: string
  person: string
  status:StatusType
  limitDate: string
  priority:number
  createDate: string
}

export enum StatusType{
  "DONE",
  "PROGRESS",
  "STOPED"
}

export enum TarefasTitleType{
  "PASSEDDEADLINE",
  "THISMONTH",
  "NEXTMONTH",
  "INTWOMONTH",
  "THREEMONTHOTMORE"
}