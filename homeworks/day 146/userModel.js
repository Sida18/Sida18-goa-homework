import mongoose from 'mongoose'

  const  UserShema =  mongoose.Schema ({
    name: {
        type: String,
        default: ''
    },

    email: {
        type: String,
        default: ''
    }
 })

export const UserModel = mongoose.model('User', UserShema)