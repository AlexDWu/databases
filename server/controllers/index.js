var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('got a get message');
      res.writeHead(201,{'Content-Type': 'application/json'});
      
      // callback because database is an async operation
      models.messages.get(function(data){
        res.end(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // pass the message to model
      res.writehead(201);
      res.end(models.messages(req.body));
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

