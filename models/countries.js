// It's called "countries" because it will be constantly saving tasks in the database. From here, the model and schema will be brought in.

const { model, Schema } = require("mongoose");

const countriesSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // This will generate a new ObjectId by default
    required: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
});

const Country = model("Country", countriesSchema);

module.exports = Country;
