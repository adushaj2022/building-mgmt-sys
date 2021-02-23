const express = require("express");
const cors = require("cors");
const employees = require("./routes/employee.routes");
const residents = require("./routes/resident.routes");
const users = require("./routes/user.routes");
const redis = require("redis");
const session = require("express-session");
const connectRedis = require("connect-redis");

require("dotenv").config();

const main = () => {
  const app = express();
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
  app.use(express.json());

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 24 * 365 * 5, //5 years
        httpOnly: true,
        sameSite: "lax",
        secure: false,
      },
      saveUninitialized: false,
      secret: process.env.SECRET_KEY,
      resave: false,
    })
  );

  app.use("/api", employees);
  app.use("/api", residents);
  app.use("/api", users);

  const PORT = process.env.PORT || 3002;

  app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
  });
};

main();
