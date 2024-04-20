import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect";
import{router as MagicMoverRouter} from "./routes/magicMover"
import{router as MagicItemRouter} from "./routes/magicItems"
dotenv.config()
const app = express();
app.use(bodyParser.json());
app.use('/magicMover',MagicMoverRouter)
app.use('/magicItem',MagicItemRouter)
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{console.log(`listening to port ${PORT}`)});
dbConnect(process.env.MONGO_URI as string);