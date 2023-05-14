const mongoose = require("mongoose");

const db = async () => {
  const MONGO =
    process.env.MONGO ||
    "mongodb+srv://saiganeshvoona:saiganesh@cluster0.nxggmur.mongodb.net/?retryWrites=true&w=majority";
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO);
    console.log("Db Connected");
  } catch (error) {
    console.log("DB Connection Error");
  }
};

module.exports = { db };
