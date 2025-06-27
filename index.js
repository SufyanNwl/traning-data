const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

// Enable CORS
const cors = require('cors');
server.use(cors());

// Use middlewares and router
server.use(middlewares);
server.use(router);

// Handle errors
server.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

module.exports = server;
