import express from 'express';
import {PORT} from './config/env.js';
import userRouter from './Routes/user.router.js';
import authRouter from './Routes/auth.route.js';
import subscriptionRouter from './Routes/subscription.router.js';
import connect from './DATABASE/mongodb.js';





const app=express();


app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subscription',subscriptionRouter)
 
app.get('/',(req,res)=>{
    res.send('Hello World')
})





app.listen(PORT,async()=> {
    console.log(`Server is running on port ${PORT}`)
    await connect()
})  







