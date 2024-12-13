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
const index_1 = __importDefault(require("./index"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const dot = dotenv_1.default.config({ path: '.env' });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const port = dot.parsed ? dot.parsed.DB_PORT : "";
        const uri = dot.parsed ? dot.parsed.DB_URL : "";
        console.log(port, uri);
        try {
            yield mongoose_1.default.connect(uri);
            console.log("database connection successfully");
            index_1.default.listen(port, () => {
                console.log(`server listening on port ${port}`);
            });
        }
        catch (error) {
            console.log(`failed to connect database ${error}`);
        }
    });
}
// call a database
main();
