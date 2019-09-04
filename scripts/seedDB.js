const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the Users info below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/game"
);

const usersSeed = [
  {
    name: "gooshtie",
    password: "lala",
    gold: 2000,
    army: 500,
    civ: 2000,
    engineers: 500,
    WS: 100,
    ES: 100,
    day: 1
  },
  {
    name: "name",
    password: "supercreative",
    gold: 2000,
    army: 500,
    civ: 2000,
    engineers: 500,
    WS: 100,
    ES: 100,
    day: 1
  },
  {
    name: "chris",
    password: "password",
    gold: 2000,
    army: 500,
    civ: 2000,
    engineers: 500,
    WS: 100,
    ES: 100,
    day: 1
  }
];

db.Users
  .remove({})
  .then(() => db.Users.collection.insert(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });