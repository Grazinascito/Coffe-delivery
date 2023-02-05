const { Router } = require("express");
const ServiceController = require("../controllers/serviceController");
const AddressController = require("../controllers/checkoutController")

const routes = Router();

const serviceController = new ServiceController();
const addressController = new AddressController();


//coffee
routes.get("/coffees", serviceController.index);
routes.get("/coffees/:id", serviceController.show);
routes.post("/coffees", serviceController.store);

//checkout
routes.get("/checkout", addressController.index);
routes.post("/checkout", addressController.store);
routes.get("/checkout/:id", addressController.show)

module.exports = routes;
