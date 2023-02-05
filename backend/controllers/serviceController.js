const { Service: ServiceModel } = require("../models/services");

class ServiceController {
  async store(req, res) {
    try {
      const createProduct = await ServiceModel.create(req.body);

      return res.status(200).json(createProduct);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async index(req, res) {
    try {
      const createdProduct = await ServiceModel.find();

      return res.status(200).json(createdProduct);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const product = await ServiceModel.findById(id);

      if (!product) {
        return res.status(400).json({ erro: "produto nao existe" });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = ServiceController;
