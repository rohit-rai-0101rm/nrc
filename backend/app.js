import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload' 
import fs from "fs";
import { Error } from "./middleware/error.js";
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(fileUpload())
app.use(cors())
app.use(express.json())
import posts from './routes/postRoute.js'
app.use("/api/v1/",posts)
app.use(Error)
export default app