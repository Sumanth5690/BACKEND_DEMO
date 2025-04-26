import mongoose from "mongoose";

const subscriptionSChema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,' Subscription name is required'],
        trim:true,
        minLength:2,
        maxLength:200
    },
    price:{
        type:Number,
        required:[true,'price is required'],
        min:[0,'price must be greater than 0'],
        
    },
    currency:{
        type:String,
        enum:['USD','IN','EUR'],
        default:'IN'
    },
    frequency:{
        type:String,
        enum:['daily','Weekly','monthly','yearly'],

    },
    category:{
        type:String,
        enum:['sports','news','entertainement','lifestyle','technology','finance','politics','other'],
    required:true,
    },
    paymentMethod:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        enum:['active','cancelled','expired'],
        default:'active '
    },
    startingDate:{
        type:Date,
        required:true,
        validate:{
            validator:(v)=>v<=new Date(),
            message:'start datemust be in the fast'
        }
    },
    renewalDate:{
        type:Date,
        required:true,
        validate:{
            validator:function(v){
                return v>this.startingDate
        },  
        message:'renewal date must be after start date'
    },
},{timestamps:true})