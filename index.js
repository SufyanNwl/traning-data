const jsonServer = require('json-server'); // Import jsonServer
const cors = require('cors'); // Import CORS middleware

// Create an instance of jsonServer
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Specify your JSON file (e.g., db.json)
const middlewares = jsonServer.defaults(); // Default middlewares for jsonServer

// Enable CORS
server.use(cors());

// Use default middlewares (e.g., logger, static files)
server.use(middlewares);

// Use the JSON file as the router
server.use(router);

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
