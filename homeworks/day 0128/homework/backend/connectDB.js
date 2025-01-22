import mongoose from "mongoose";

export const connectDB = async () => {
    const connect1  = await mongoose.connect(process.env.MANGODB_URL)
    console.log('server is connected', connect1.connection.host)
}