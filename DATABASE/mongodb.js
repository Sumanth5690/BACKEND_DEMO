import mongoose from 'mongoose'
import { DB_URI,NODE_ENV } from '../config/env.js'

if(!DB_URI){
    throw new Error('please define the mongo url in the .enev.local')
}


const connect=async()=>{
        try {
            await mongoose.connect(DB_URI)
            console.log('mongo db connected')
        } catch (error) {
            console.log(error)

        }
}

export default connect