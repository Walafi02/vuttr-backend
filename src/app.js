import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';

import swaggerDocument from './config/swagger';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
    this.server.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
