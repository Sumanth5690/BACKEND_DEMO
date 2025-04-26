import mongoose  from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{type:String,required:[true,'user name is required'],
    trim:true,
    minLength:2,
    maxLength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        match:[/\S+@\S+\.\S+/,'please fill a valid email adress']
    },
    password:{
        type:String,
        required:[true,'password is required'],
      minLength:6,
    }
},{timestamps:true})

const user=mongoose.model('user',userSchema)

export default user