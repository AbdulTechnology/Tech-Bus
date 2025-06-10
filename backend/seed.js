const sequelize = require('./config/db');
const Route = require('./models/Route');
const Bus = require('./models/Bus');

const seed = async () => {
  await sequelize.sync({ force: true });

  const r1 = await Route.create({ from: 'Chennai', to: 'Dindigul', type: 'Non AC Sleeper' });
  const r2 = await Route.create({ from: 'Dindigul', to: 'Chennai', type: 'Non AC Sleeper' });
  const r3 = await Route.create({ from: 'Palani', to: 'Chennai', type: 'AC Sleeper' });
  const r4 = await Route.create({ from: 'Chennai', to: 'Palani', type: 'AC Sleeper' });

  await Bus.create({ name: 'Bus A', routeId: r1.id, departureTime: '20:00' });
  await Bus.create({ name: 'Bus B', routeId: r2.id, departureTime: '21:00' });
  await Bus.create({ name: 'Bus C', routeId: r3.id, departureTime: '19:30' });
  await Bus.create({ name: 'Bus D', routeId: r4.id, departureTime: '22:15' });

  console.log('✅ Seeded initial routes and buses');
};

seed();
