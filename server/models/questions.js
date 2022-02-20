const mongoose = require("mongoose");
const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = require("react-dom");
const { internalIP } = require("webpack-dev-server");

const questionSchema = new mongoose.Schema({
  content: String,
  answer: Number,
  difficulty: Number,
  scoreAdded: Number,  
});

// compile model from schema
module.exports = mongoose.model("question", questionSchema);
