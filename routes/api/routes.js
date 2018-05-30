const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with "/api/users"
routes
  .route("/all")
  .get(itemController.findAll)
  .post(itemController.create);

module.exports = routes;
