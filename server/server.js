const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fs = require('fs');
const app = express();
const xlsx = require('xlsx');
const path = require('path');
const Shopify = require('shopify-api-node');

const PORT = process.env.PORT || 8000;

dotenv.config();

// // parse application/json
app.use(bodyParser.json());

// express static

app.use(express.static('public'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/orders', async (req, res) => {
  const { shopName, apiKey, password, startDate, endDate } = req.body;
  const shopify = new Shopify({
    shopName: shopName,
    apiKey: apiKey,
    password: password,
  });
  const compDate = (date) => {
    return `${date}-04:00`;
  };
  const data = await shopify.order.list({
    status: 'any',
    limit: 60,
    processed_at_min: compDate(startDate),
    processed_at_max: compDate(endDate),
    fields: 'name, created_at, line_items, shipping_lines, fulfillment_status',
  });
  res.send(data);
});

app.post('/upload', (req, res) => {
  const newWB = xlsx.utils.book_new();
  const newWS = xlsx.utils.json_to_sheet(req.body.dataArray);

  xlsx.utils.book_append_sheet(newWB, newWS, 'New Data');

  const stream = xlsx.stream.to_csv(newWS);
  stream.pipe(fs.createWriteStream(`./public/${req.body.name}.csv`));
  res.send('it is ok');
});
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Express serve up index.html file if it doesn't recognize route

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
