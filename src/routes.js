import { Router } from 'express';

import { UserController, SessionController } from './app/controllers';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.post('/user', UserController.store);

export default routes;
