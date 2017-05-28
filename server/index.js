var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var dbConnection = require('./API/MongooseAPI');
var expressApp = express();

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const PORT = process.env.PORT || 9000;

dbConnection.createConnection().then(( MongoDB ) => {
  expressApp.use(express.static(path.resolve(__dirname, '../client/build')));

  require('./routes.js')(expressApp, path);

  // Reroutes all bad requests back to the client side router
  expressApp.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

  expressApp.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
  });
});
