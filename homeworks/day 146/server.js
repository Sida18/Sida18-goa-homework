import  express from "express"
import dotenv from "dotenv"
import { connectDB } from "./connectDB.js"
import { UserModel } from "./userModel.js"
dotenv.config()
const app = express()

app.get('/',  async (req,res) => {
    const user = await UserModel.find()
    res.status(200).json({message: user})
    return user 
  
})

app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`server is running on port ${process.env.PORT}`)
})