var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = "SELECT * FROM messages";
      var queryArgs = [];
      db.connect();
      db.query(queryString, queryArgs, function(err, data){
        callback(data);
        db.close();
      }
    }, // a function which produces all the messages
    post: function (message) {
      // insert query into database
      var queryString = "INSERT messages (text, user, room) VALUES (?, ?, ?)";
      var queryArgs = [
        message.text,
        message.username,
        message.roomname
      ]
      db.connect();
      db.query(queryString, queryArgs);
      db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

