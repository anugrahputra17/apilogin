import express  from "express";
import db from "./config/database.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

try{
    await db.authenticate();
    console.log('database connected');
} catch(error){
    console.error(error);
}

app.use(cors({ credentials:true, origin:'*'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(port, ()=> console.log('server running....'));