import { Router } from 'express';
import authMiddleware from './app/middleware/auth';

import {
  UserController,
  SessionController,
  ToolsController,
} from './app/controllers';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.post('/user', UserController.store);

routes.use(authMiddleware);

routes.get('/tools', ToolsController.index);
routes.post('/tools', ToolsController.store);
routes.delete('/tools/:id', ToolsController.delete);

export default routes;
