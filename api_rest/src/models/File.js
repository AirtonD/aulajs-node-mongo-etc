import Sequelize, { Model } from 'sequelize';

export default class File extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${process.env.APP_URL}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'files',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
