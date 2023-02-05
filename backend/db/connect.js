const mongoose = require("mongoose");

const main = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.CONN_MONGO);

    console.log("connected");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
};

module.exports = main;
