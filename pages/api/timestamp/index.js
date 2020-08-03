const Cors = require('cors');
const initMiddleware = require('../../../lib/init-middleware');

const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  })
);

const isValidDate = (d) => d instanceof Date && !isNaN(d);

export default async (req, res) => {
  await cors(req, res);
  const date = new Date();
  if (!isValidDate(date)) {
    res.json({ error: 'Invalid Date' });
  } else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    });
  }
};
