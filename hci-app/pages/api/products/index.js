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
      const products = await Prod.find();
      res.status(200).json(products);
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