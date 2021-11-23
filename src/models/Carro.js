import Sequelize, { Model } from 'sequelize';

export default class Carro extends Model {
  static init(sequelize) {
    super.init({
      marca: Sequelize.STRING,
      modelo: Sequelize.STRING,
      ano: Sequelize.STRING,
      preco: Sequelize.FLOAT,
    }, {
      sequelize,
    });
  }
}
