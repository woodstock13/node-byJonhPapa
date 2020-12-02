var moogoose = require("mongoose");

var catSchema = moogoose.Schema({
  name: String,
  age: Number,
  type: String,
});

module.exports = moogoose.model("Cat", catSchema);
