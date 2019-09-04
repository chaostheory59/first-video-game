const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: { type: String, required: true},
    password: { type: String, required: true},
    gold: { type: Number, required: true},
    army: { type: Number, required: true},
    civ: { type: Number, required: true},
    engineers: { type: Number, required: true},
    WS: { type: Number, required: true},
    ES: { type: Number, required: true},
    day:{ type: Number, required: true}
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;