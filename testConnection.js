const { Sequelize } = require('sequelize');

// Ganti konfigurasi dengan milik Anda
const sequelize = new Sequelize('database_restaurant', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();
