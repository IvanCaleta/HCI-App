export default async function handler(req,res){
    const method=req.method

    const orders=require('../../../models/Order.json')

    if(method==="GET"){
        try {
            res.status(200).send(orders)
        } catch (error) {
            res.status(500).error(error)
        }
    }
    if(method==="POST"){
        try {
            console.log('aaa',req.body)
            const order=req.body
            orders.push(order)
            res.status(201).send(order)
        } catch (error) {
            res.status(500).error(error)
        }
    }
}