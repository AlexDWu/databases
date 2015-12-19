var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      res.writeHead(200,{'Content-Type': 'application/json'});
      
      // callback because database is an async operation
      models.messages.get(function(data){
        res.end(JSON.stringify({'results':data}));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // pass the message to model
      res.writeHead(201);
      res.end(models.messages.post(req.body));
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.end();
    },
    post: function (req, res) {
      res.end();
    }
  }
};

