export default async function handler(req, res) {
    const method=req.method
    const id=req.query.id
  
    const products=require('../../../models/allFood.json')
    const product = products.find(prod=>prod._id===id)
    if(method==='GET'){
         try {
             res.status(200).send(product)
         } catch (error) {
             res.status(500).json(error)
         }
     }
    
   }
   