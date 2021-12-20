import { Router } from 'express';

// import AdminController from '../controllers/AdminController';

import AppError from '../errors/AppError';

import AdminRepository from '../repositories/AdminRepository';
import AppRepository from '../repositories/AppRepository';

const adminRouter = Router();
// TODO retornar a modularização padrão com os controllers

// const adminController = new AdminController();

const admin_repo = new AdminRepository();
const app_repo = new AppRepository();

// criar um vendedor e alterar a cor do app

// adminRouter.get('/', adminController.all);
adminRouter.get('/', async (request, response) => {
  const admins = await admin_repo.all();

  return response.json(admins);
});

// adminRouter.patch('/color', adminController.editAppColor);
adminRouter.patch('/color', (request, response) => {
  const { id, app_id, color } = request.body;

  const adminExists = admin_repo.findById(id);

  if (!adminExists) {
    throw new AppError('Admin not found');
  }

  const updated_app = app_repo.updateColor(app_id, color);

  return response.json(updated_app);
});

export default adminRouter;
