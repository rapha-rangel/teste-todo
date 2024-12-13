import { TodoType } from "./../types/todo"
import { model, Schema } from "mongoose"

const todoSchema: Schema = new Schema(
  {
    todoName: {
      type: String,
      required: true,
    },
    person: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    limitDate: {
      type: Date,
      required:true
    },
    priority: {
      type: Number,
      required: true,
    },
    createDate: {
      type: Date,
      required:true
    }
  },
  { timestamps: true }
)

export default model<TodoType>("Todo", todoSchema)