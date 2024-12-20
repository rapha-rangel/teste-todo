"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getAllTodos = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
});
exports.getAllTodos = getAllTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const todo = new todo_1.default({
            todoName: body.todoName,
            person: body.person,
            status: body.status,
            limitDate: body.limitDate,
            priority: body.priority,
            createDate: body.createDate
        });
        yield todo.save();
        const allTodos = yield todo_1.default.find();
        res
            .status(201)
            .json({ message: "Todo added", data: allTodos });
    }
    catch (error) {
        res.status(500).json({ message: "Houve um erro", data: error });
        throw error;
    }
});
exports.addTodo = addTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const findByID = yield todo_1.default.findByIdAndUpdate({ _id: id }, body);
        console.log(findByID);
        const allTodos = yield todo_1.default.find();
        res.status(200).json({
            message: "Todo updated",
            data: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield todo_1.default.findByIdAndDelete(req.params.id);
        const allTodos = yield todo_1.default.find();
        res.status(200).json({
            message: "Todo deleted",
            data: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTodo = deleteTodo;
