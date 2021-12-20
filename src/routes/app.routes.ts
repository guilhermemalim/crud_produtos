import { Router } from 'express';

// import AppController from '../controllers/AppController';
import AppRepository from '../repositories/AppRepository';

const appRouter = Router();
const app_repo = new AppRepository();

// TODO retornar a modularização padrão com os controllers
// const appController = new AppController();

// criar um vendedor e alterar a cor do app

// appRouter.get('/', appController.all);

appRouter.get('/', async (request, response) => {
  const apps = await app_repo.all();
  return response.json({ apps });
});

export default appRouter;
