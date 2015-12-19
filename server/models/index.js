var db = require('../db');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('chat', 'root', 'password');

var Message = sequelize.define('Message', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

Message.sync();

module.exports = {
  messages: {
    get: function (callback) {
      Message.findAll().then(callback);
    }, // a function which produces all the messages
    post: function (message) {
      var newMessage = Message.build(message);
      newMessage.save();
      // insert query into database
      // console.log('trynig to insert this into the db ' + JSON.stringify(message));
      // var queryString = "INSERT messages (text, user, room) VALUES (?, ?, ?)";
      // var queryArgs = [
      //   message.text,
      //   message.username,
      //   message.roomname
      // ]
      // db.query(queryString, queryArgs, function(err, results) {
      //   if(err){
      //     throw err;
      //   } else {
      //     console.log('message successfully inserted');
      //   }
      // });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

