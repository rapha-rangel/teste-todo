"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get("/todos", controllers_1.getAllTodos);
router.post("/add", controllers_1.addTodo);
router.put("/edit/:id", controllers_1.updateTodo);
router.delete("/delete/:id", controllers_1.deleteTodo);
exports.default = router;
