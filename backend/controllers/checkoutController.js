const { Address: AddressModel } = require("../models/address");

class AddressController {
  async store(req, res) {
    try {
      const createAddress = await AddressModel.create(req.body);

      return res.status(200).json(createAddress);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async index(req, res) {
    try {
      const createdAddress = await AddressModel.find();

      return res.status(200).json(createdAddress);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const address = await AddressModel.findById(id);
      return res.status(200).json(address);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = AddressController;
