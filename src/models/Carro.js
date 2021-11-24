import Sequelize, { Model } from 'sequelize';

export default class Carro extends Model {
  static init(sequelize) {
    super.init({
      marca: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Informe a marca do veículo!',
          },
        },
      },
      modelo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Informe a modelo do veículo!',
          },
        },
      },
      ano: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Informe o ano do veículo!',
          },
        },
      },
      preco: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Preço precisa ser um número de ponto flutuante ex: 13000.00',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
