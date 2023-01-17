import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import civilizationRoute from './routes/civilizationRoute.js';
import unitRoute from './routes/unitRoute.js';
import buildingRoute from './routes/buildingRoute.js';
import technologyRoute from './routes/technologyRoute.js';

dotenv.config();

const app = express();
const router = express.Router();

const corsOptions = {
  origin: "https://age-of-empires-2-api.vercel.app",
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5000;

const addMiddleWares = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
};

const startServer = () => {
  app.listen(port, () => {
    console.log("Server is running in port " + port);
    console.log("Porca Madonna");
  });
};

const loadRoutes = () => {
    app.use("/api", router);
    app.use("/api/civilizations", civilizationRoute);
    app.use("/api/units", unitRoute);
    app.use("/api/buildings", buildingRoute);
    app.use("/api/technologies", technologyRoute);
};

const mongoDBConnection = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is running in port :>> ", port);
  } catch (error) {
    console.log("error connecting to MongoDB", error);
  }
};

mongoDBConnection();
addMiddleWares();
loadRoutes();
startServer();