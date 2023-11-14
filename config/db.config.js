const { default: mongoose } = require('mongoose');
const { config } = require('.');

exports.connect = () => {
  mongoose
    .connect(config.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('DB connection established'))
    .catch((error) => {
      console.log('Error connecting to Mongo DB', error.message);
      process.exit(1);
    });
};
