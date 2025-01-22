import mongoose from "mongoose"

export const connectDB = async () => {
    
    try {
        const connect = await mongoose.connect(process.env.MANGODB_URL)
        console.log(`hello  ${connect.connection.host}`)
    }

    catch (err) {
        console.log('u catched an',err.message)
    }

}