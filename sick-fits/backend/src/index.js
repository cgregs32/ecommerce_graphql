// let's go!
require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// TODO user express Middleware to handle cookies (JWT)
// TODO user express Middleware to populate current User

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details => {
    console.log(
      `server is now running on port http://localhost:${details.port}`
    );
  }
);
