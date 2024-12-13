import express,{ Express } from "express";
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"
import dotenv from 'dotenv';
import bodyParser from "body-parser";
const dot = dotenv.config({path:'.env'})

const port =dot.parsed? dot.parsed.DB_PORT:"";

const uri: string = dot.parsed ?dot.parsed.DB_URI:"";


console.log(uri, port)
const app: Express = express();
app.use(bodyParser.json())
app.use(cors());
app.use(todoRoutes);

mongoose
  .connect(uri)
  .then(() =>
    app.listen(port, () =>
      console.log(`Server running on http://localhost:4000`)
    )
  )
  .catch(error => {
    throw error
  })
