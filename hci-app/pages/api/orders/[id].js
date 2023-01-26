import Order from "../../../models/Order";
import connectDB from "../../../util/mongo";

connectDB()
export default async function handler(req,res){
    const method=req.method

    const id=req.query.id

    if(method==="GET"){
        try {
            const order = await Order.findById(id)
            res.status(200).send(order)
        } catch (error) {
            res.status(501).error(error)
        }
    }
    if (method === "PUT") {
        try {
          const order = await Order.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          res.status(200).send(order);
        } catch (err) {
          res.status(500).error(err);
        }
      }
    if(method==="DELETE"){
        try{
            const order = await Order.findByIdAndDelete(id)
            res.status(202).send(order)
        }catch (error) {
            res.status(501).error(error)
        }
    }
}