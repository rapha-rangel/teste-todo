import { Document } from "mongoose";

export interface TodoType extends Document{
  todoName: string
  person: string
  status: number
  limitDate: Date
  priority:number
  createDate:Date
}