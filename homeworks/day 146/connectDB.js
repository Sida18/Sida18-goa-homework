import mongoose  from "mongoose";

export const connectDB = async () => {
 const conn  = await mongoose.connect(process.env.MANGODB_URL )
 console.log("db is connected", conn.connection.host)
}