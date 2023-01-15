export default async function handler(req,res){
    const method=req.method

    const orders=require('../../../models/Order.json')
    const id=req.query.id

    if(method==="GET"){
        try {
            const order = orders.find(ord=>ord._id===id)
            res.status(200).send(orders)
        } catch (error) {
            res.status(500).error(error)
        }
    }
}