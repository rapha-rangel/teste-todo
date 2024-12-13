import { Router } from "express"
import { getAllTodos, addTodo, updateTodo, deleteTodo } from "../controllers"

const router: Router = Router()

router.get("/todos", getAllTodos)

router.post("/add", addTodo)

router.put("/edit/:id", updateTodo)

router.delete("/delete/:id", deleteTodo)

export default router