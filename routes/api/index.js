const router = require("express").Router();
const path = require("path");
const itemRoutes = require("./routes");

// user routes
router.use("/items", itemRoutes);

module.exports = router;
