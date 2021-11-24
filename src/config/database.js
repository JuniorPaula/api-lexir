require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: 'carros',
  define: {
    timestamps: true,
    underscored: true,
  },
};
