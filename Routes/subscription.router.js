import { Router } from "express"

const subscriptionRouter=Router()



subscriptionRouter.get('/',(req,res)=>{res.send({title:'get all subscriptions'})})     

subscriptionRouter.get('/:id',(req,res)=>{res.send({title:'get subscription details'})}) 

subscriptionRouter.post('/',(req,res)=>{res.send({title:'create a subscriptions'})}) 

subscriptionRouter.put('/:id',(req,res)=>{res.send({title:'update a subscriptions'})}) 

subscriptionRouter.delete('/:id',(req,res)=>{res.send({title:'delete subscriptions'})}) 

subscriptionRouter.post('/user/:id',(req,res)=>{res.send({title:'get all user subscriptions'})}) 

subscriptionRouter.put('/:id/cancel',(req,res)=>{res.send({title:'cancel subscriptions'})}) 

subscriptionRouter.get('/upcoming-renewals',(req,res)=>{res.send({title:'get upcoming subscriptions'})})     
export default subscriptionRouter