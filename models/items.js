const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item: { type: String, required: true, default: '' }
});

const itemModel = mongoose.model("itemModel", profileSchema);

module.exports = itemModel;
