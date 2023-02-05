const mongoose = require("mongoose");

const { Schema } = mongoose;

const AddressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  complement: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    required: true,
  },
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = {
  Address,
  AddressSchema,
};
