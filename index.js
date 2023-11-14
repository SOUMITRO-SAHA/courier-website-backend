// Configuring the Database Connection
require('./config/db.config').connect();

const app = require('./app');
const { config } = require('./config');

app.listen(config.PORT, () => {
  console.log('Server listening on port ' + config.PORT);
});
