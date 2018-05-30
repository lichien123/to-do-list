const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/listdb"
)

const seeds = [
  {
    item: "feed the spider"
  }
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(seeds))
  .then(data => {
    console.log(data);
    console.log(data.result.n + " items inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
