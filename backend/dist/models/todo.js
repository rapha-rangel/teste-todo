"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
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
        required: true
    },
    priority: {
        type: Number,
        required: true,
    },
    createDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Todo", todoSchema);
