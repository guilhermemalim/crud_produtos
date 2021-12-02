import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/all', productsController.getAll);

productsRouter.get('/:slug', productsController.getByName);

productsRouter.post('/create', productsController.create);

productsRouter.patch('/update-name/:slug', productsController.updateName);

productsRouter.patch(
  '/update-quantity/:slug',
  productsController.updateQuantity,
);

productsRouter.delete('/delete/:slug', productsController.deleteByName);

export default productsRouter;
