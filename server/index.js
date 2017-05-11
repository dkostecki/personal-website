var express = require('express');
var path = require('path');
var expressApp = express();

const PORT = process.env.PORT || 9000;

expressApp.use(express.static(path.resolve(__dirname, '../client/build')));

expressApp.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

expressApp.listen(PORT, function() {
  console.log('Listening on port: ', PORT);
});
