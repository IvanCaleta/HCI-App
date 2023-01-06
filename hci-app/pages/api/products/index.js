export default function handler(req, res) {
   const method=req.method;
   
   const products=require('../../../models/Product.json')
  
   if(method==='GET'){
        try {
            res.status(200).send(products)
        } catch (error) {
            console.log('aaa')
            res.status(500).json(error)
        }
    }
   
  }
  