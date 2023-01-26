import connectDB from "../../../util/mongo"
import Prod from "../../../models/Product"

/**
 * 
 * @param {import ("next").NextApiRequest}req
 * @param {import("next").NextApiResponse}res
 * 
 */
export default async function handler(req, res) {
  const { method} = req;

  console.log("Connecting DB...")
  connectDB()
  console.log("Connected")

  if (method === "GET") {
    try {
      const popular = await Prod.find({popular:1})
      const pizzas= await Prod.find({category:"pizzas"})
      const burgers= await Prod.find({category:"burgers"})
      const chicken= await Prod.find({category:"chicken"})
      const dish= await Prod.find({category:"dish"})

      res.status(200).send({
        popular:popular,
        pizzas:pizzas,
        burgers:burgers,
        chicken:chicken,
        dish:dish
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const product = await Prod.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}