import Cors from 'cors';

import initMiddleware from '../../../lib/init-middleware';

const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  })
);

const isValidDate = (d) => d instanceof Date && !isNaN(d);

export default async (req, res) => {
  await cors(req, res);
  const {
    query: { date_string },
  } = req;
  if (/\d{5,}/.test(date_string)) {
    return res.json({
      unix: date_string,
      utc: new Date(parseInt(date_string)).toUTCString(),
    });
  }
  const date = new Date(date_string);
  if (!isValidDate(date)) {
    res.json({ error: 'Invalid Date' });
  } else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    });
  }
};
