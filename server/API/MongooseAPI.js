/* Custom MongoDB API to access the same connection across the whole Node application
* Author: Deepankar Malhan
*/

var mongoose = require('mongoose');
var Promise = require('bluebird');

var MongoDB;
var connectionURI = process.env.MONGODB_URI || `mongodb://127.0.0.1:27017`;
var connectionOptions = { promiseLibrary: Promise };

createConnection = () => {
  return new Promise((resolve, reject) => {
    console.log(`Inside Mongoose API, creating a connection`);
    MongoDB = mongoose.createConnection(connectionURI, connectionOptions);
    console.log(`Now returning the newly created connection`);
    return resolve(MongoDB);
  });
}

getDBInstance = () => {
  return MongoDB;
}

module.exports = {
  createConnection, getDBInstance
};
