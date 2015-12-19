CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
/*
CREATE TABLE users (
  id int not null auto_increment,
  name text,
  primary key(id)
);

CREATE TABLE rooms (
  id int not null auto_increment,
  name text,
  primary key(id)
);
*/

/* Describe your table here.*/
CREATE TABLE messages (
  id int not null auto_increment,
  text text,
  user text,
  room text,

  primary key (id)
  -- foreign key (user_id) references users(id),
  -- foreign key (room_id) references rooms(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

