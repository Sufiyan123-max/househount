const mongoose = require('mongoose');

const connectionOfDb = () => {
  if (!process.env.MONGO_DB) {
    console.error('ERROR: MONGO_DB environment variable is not defined in .env file');
    return;
  }
  
  mongoose
    .connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error(`Could not connect to MongoDB: ${err.message}`);
    });
};

module.exports = connectionOfDb;