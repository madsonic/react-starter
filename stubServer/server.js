const PORT = process.env.PORT || 3000;

const http = require('http');
const app = require('express')();
const cors = require('cors');

app.server = http.createServer(app);

// Body parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS middleware
app.use(cors());

// Header middleware
app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  res.header('Content-Type', 'application/json');
  return next();
});

// Routes
app.get('/hotels', (req, res) => {
  return res.send(require('./hotels.json'));
});

app.get('/hotels/:id/rooms', (req, res) => {
  return res.send(require('./rooms.json'));
});

app.get('/booking_ranges', (req, res) => {
  return res.send(require('./dates.json'));
});

app.get('/prices/search', (req, res) => {
  const roomId = req.query.roomId;
  const bookingRangeId = req.query.bookingRangeId;
  return res.send(require('./prices.json'));
});

app.param('vendorTicker', (req, res, next, ticker) => {
  req.ticker = ticker;
  return next();
});

app.server.listen(PORT);
