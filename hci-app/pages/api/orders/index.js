import Order from "../../../models/Order";
import connectDB from "../../../util/mongo";

connectDB()

export default async function handler(req,res){
    const method=req.method

    if(method==="GET"){
        try {
            const orders=await Order.find()
            res.status(200).send(orders)
        } catch (error) {
            res.status(500).error(error)
        }
    }
    if(method==="POST"){
        try {
            const order=await Order.create(req.body)
            res.status(201).send(order)
        } catch (error) {
            res.status(500).error(error)
        }
    }
}