// require mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;
const contactSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  phone: Number,
});
module.exports = Contact = mongoose.model("contact", contactSchema);
