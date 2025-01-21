import express from 'express'
import { connectDB } from './connectDB.js'
import dotenv from 'dotenv'
import {  UserModel } from './serverModules.js'
dotenv.config()
const app = express()

app.get('/', async (req, res) => {
    const user = await UserModel.find()
    res.status(200).json({messege: user})
    return user
})

app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`server is running on port ${process.env.PORT}`)
})