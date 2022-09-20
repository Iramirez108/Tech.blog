const { User } = require('../models');

const userData = [{
    username: "Sal",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    username: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    username: "Ivan",
    email: "Ivan@gmail.com",
    password: "password12345"
  },
];

const seedUsers = () => User.bulkCreate(userData,{individualHooks: true});

module.exports = seedUsers;