module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
  ),

  down: () => {},
};
