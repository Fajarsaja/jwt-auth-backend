import express from "express"
import cors from "cors"
import db from "./config/database.js";
import cookieParser from "cookie-parser";
import router from "./routes/UserRoute.js";
import dotenv from "dotenv"
dotenv.config();

const app = express()



try {
    await db.authenticate();
    console.log('database connected..');
} catch (error) {
    console.error(error);
}
app.use(cookieParser())

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5174' 
})); 

app.use(express.json())
app.use(router)


// (async()=>{
//     await db.sync();
// })();

app.listen(5001, ()=> console.log("server running at port 5001....."));
