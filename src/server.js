import cors from "cors";
import express from "express";
import morgan from "morgan";
import router from "./routes";

export const initServer = () => {
  const app = express();

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(cors());
  app.use(router);

  app.use((err, req, res, next) => {
    res.status(500).send(err.message);
  });

  return app;
};
