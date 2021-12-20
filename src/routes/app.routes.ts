import { Router } from 'express';

import AppController from '../controllers/AppController';

const appRouter = Router();
const appController = new AppController();

// criar um vendedor e alterar a cor do app

appRouter.get('/', appController.all);

export default appRouter;
