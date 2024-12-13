import { Response, Request } from "express";
import { TodoType } from "../types/todo";
import Todo from "../models/todo";

const getAllTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: TodoType[] = await Todo.find();
    res.status(200).json({ todos })
  } catch (error) {
    throw error
  }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
  
  try {
    const body= req.body as Pick<TodoType, "todoName" | "person" | "status"| "limitDate"| "priority" | "createDate" >
    const todo: TodoType = new Todo({
      todoName: body.todoName,
      person: body.person,
      status: body.status,
      limitDate:body.limitDate,
      priority: body.priority,
      createDate:body.createDate
    });

    await todo.save();
    const allTodos: TodoType[] = await Todo.find();

    res
      .status(201)
      .json({ message: "Todo added", data: allTodos })
  } catch (error) {
    res.status(500).json({message: "Houve um erro", data:error})
    throw error
  }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const findByID= await Todo.findByIdAndUpdate(
      { _id: id },
      body
    )
    console.log(findByID)
    const allTodos: TodoType[] = await Todo.find();
    res.status(200).json({
      message: "Todo updated",
      data: allTodos,
    })
  } catch (error) {
    throw error
  }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    const allTodos: TodoType[] = await Todo.find();
    res.status(200).json({
      message: "Todo deleted",
      data: allTodos,
    })
  } catch (error) {
    throw error
  }
}

export {getAllTodos, addTodo, updateTodo, deleteTodo }