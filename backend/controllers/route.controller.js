const Route = require('../models/Route');
const Bus = require('../models/Bus');

const getAvailableRoutes = async (req, res) => {
  const { from, to } = req.query;
  const routes = await Route.findAll({
    where: { from, to },
    include: [Bus],
  });
  res.json(routes);
};

module.exports = { getAvailableRoutes };
