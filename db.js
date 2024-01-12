const { connect, models } = require("mongoose");

const connectDB = async () => {
  try {
    await connect("mongodb://localhost/countries"); // Since await is used with an asynchronous method, it requires the async keyword. The try block validates the connection.
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB }; // It's exporting the connection to use it elsewhere when needed.
