const mongoose = require('mongoose');
require('dotenv/config');

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const db = process.env.DB_NAME;

const url = `mongodb+srv://${user}:${pass}@cluster0.itfvd.mongodb.net/${db}?retryWrites=true&w=majority`;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};
const callback = e =>
  console.log(e ? `ERROR: mongodb, ${e}` : 'SUCCESS: mongodb.');

mongoose.connect(url, options, callback);

module.exports = mongoose;
