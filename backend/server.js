const app = require('./app');
const PORT = process.env.PORT || 5000;
const sequelize = require('./config/db');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
sequelize.sync({ alter: true })  // Use { force: true } in dev only
  .then(() => console.log('Database synced'))
  .catch(err => console.error('DB error:', err));


