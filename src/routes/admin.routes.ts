import { Router } from 'express';

import AdminController from '../controllers/AdminController';

const adminRouter = Router();
const adminController = new AdminController();

// criar um vendedor e alterar a cor do app

adminRouter.get('/', adminController.all);
adminRouter.patch('/color', adminController.editAppColor);

export default adminRouter;
