import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Carro from '../models/Carro';

const models = [Carro];

/** configuração de conexão com a base de dados */
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
