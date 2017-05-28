var MongoDB = require('./API/MongooseAPI').getDBInstance();

module.exports = function(expressApp, path) {
  // Add all the API here

  expressApp.post('/api/newcontactrequest', function(req, res) {
    // First figure out what the contact request contains, then post it in the MongoDB database.
    // Then use nodemailer to send an email to myself
    return res.send(JSON.stringify({message: "New contact Request API hit!"}));
  });
};
