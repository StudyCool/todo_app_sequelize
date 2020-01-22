'use strict';

const bcrypt = require('bcrypt');

function generateUsers(){
  const users = [];
  for (let i=0; i<100; ) {
    users.push(new Object({
                            firstName: 'John',
                            lastName: 'Doe',
                            login: `test_login${++i}npx`,
                            email: `demo${i}@demo.com`,
                            passwordHash: bcrypt.hashSync(`password${i}`, bcrypt.genSaltSync( 10 ) ),
                            createdAt: new Date(),
                            updatedAt: new Date(),
                          }));
  }

  return users;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', generateUsers(), {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
