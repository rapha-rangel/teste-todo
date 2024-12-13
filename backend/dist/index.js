"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const dot = dotenv_1.default.config({ path: '.env' });
const port = dot.parsed ? dot.parsed.DB_PORT : "";
const uri = dot.parsed ? dot.parsed.DB_URI : "";
console.log(uri, port);
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.default);
mongoose_1.default
    .connect(uri)
    .then(() => app.listen(port, () => console.log(`Server running on http://localhost:4000`)))
    .catch(error => {
    throw error;
});
