import express from  "express"
import dotenv from "dotenv";
import { connectDB } from './connectDB.js'
dotenv.config()
const app = express()

const PORT = 5000
app.listen(PORT, () => {
    connectDB();
    console.log(`server  is running  on http://localhost:${PORT}`);
});