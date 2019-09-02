let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  watchList: {
    type: [String]
  },
  stocks: {
    type: [{
      symbol: String,
      price: Number,
      quantity: Number
    }]
  }
});

module.exports = mongoose.model("users", userSchema);