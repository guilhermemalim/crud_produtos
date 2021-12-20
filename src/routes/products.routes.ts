import { Router } from 'express';

// import ProductsController from '../controllers/ProductsController';

import ProductRepository from '../repositories/ProductRepository';

import AppError from '../errors/AppError';

const product_repo = new ProductRepository();

const productsRouter = Router();
// const productsController = new ProductsController();

// productsRouter.get('/all', productsController.getAll);
productsRouter.get('/all', async (request, response) => {
  const products = await product_repo.all();

  return response.json({
    products,
  });
});

// productsRouter.get('/:slug', productsController.getByName);
productsRouter.get('/:slug', async (request, response) => {
  const { slug } = request.params;

  const product = product_repo.getByName(slug); // erro é jogado dentro do repo

  if (!product) {
    throw new AppError('Produto não cadastrado', 404);
  }

  return response.json({
    product,
  });
});

// productsRouter.post('/create', productsController.create);
productsRouter.post('/create', async (request, response) => {
  const { name, quantity } = request.body;

  const product = await product_repo.create(name, quantity); // erro é jogado dentro do repo

  return response.json({
    product,
  });
});

// productsRouter.patch('/update-name/:slug', productsController.updateName);
productsRouter.patch('/update-name/:slug', async (request, response) => {
  const { name } = request.body;
  const { slug } = request.params;

  const product = await product_repo.updateName(slug, name); // erro é jogado dentro do repo

  return response.json({
    product,
  });
});

// productsRouter.patch(
//   '/update-quantity/:slug',
//   productsController.updateQuantity,
// );
productsRouter.patch('/update-quantity/:slug', async (request, response) => {
  const { quantity } = request.body;
  const { slug } = request.params;

  const product = await product_repo.updateQuantity(slug, quantity); // erro é jogado dentro do repo

  return response.json({
    product,
  });
});

productsRouter.delete('/delete/:slug', async (request, response) => {
  const { slug } = request.params;

  await product_repo.deleteByName(slug); // o erro é jogado dentro do repo

  return response.sendStatus(200);
});

export default productsRouter;
