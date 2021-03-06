var db = require('../db');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('chat', 'root', 'password');

var Message = sequelize.define('Message' {
  user: Sequelize.STRING,
  text: Sequelize.STRING,
  room: Sequelize.STRING
});

Message.sync();

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = "SELECT * FROM messages";
      var queryArgs = [];
      db.query(queryString, queryArgs, function(err, data){
        if(err){
          throw err;
        }
        callback(data.map(function(element){
          return ({
            text: element.text,
            username: element.user,
            roomname: element.room
          })
        }));
      });
    }, // a function which produces all the messages
    post: function (message) {
      // insert query into database
      console.log('trynig to insert this into the db ' + JSON.stringify(message));
      var queryString = "INSERT messages (text, user, room) VALUES (?, ?, ?)";
      var queryArgs = [
        message.text,
        message.username,
        message.roomname
      ]
      db.query(queryString, queryArgs, function(err, results) {
        if(err){
          throw err;
        } else {
          console.log('message successfully inserted');
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

