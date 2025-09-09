const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [{
      nome: 'Luiz',
      email: 'luiz1@gmail.com',
      password_hash: await bcrypt.hashSync('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Fernando',
      email: 'fernando@gmail.com',
      password_hash: await bcrypt.hashSync('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'José',
      email: 'joseph@gmail.com',
      password_hash: await bcrypt.hashSync('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ],
    {},
  ),
  down() {},
};
