import express from "express";
import mongoose from "mongoose";
import router from "./Routes/indexRouter.js";
import cors from 'cors'

const PORT = 3000;
const DB_URL = 'mongodb+srv://gnorl:onlyDBs@cluster0.52fgpsl.mongodb.net/test'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

async function startApp(){
try{
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
}catch(e){
    console.log(e)
}}

startApp()