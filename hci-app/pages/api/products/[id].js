import Prod from "../../../models/Product";
import connectDB from "../../../util/mongo"
connectDB()
export default async function handler(req, res) {
    const method=req.method
    const id=req.query.id
  
     if (method === "GET") {
        try {
          const product = await Prod.findById(id);
          res.status(200).json(product);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    
   }
   