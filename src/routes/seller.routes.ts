import { Router } from 'express';

import AppError from '../errors/AppError';

import AdminRepository from '../repositories/AdminRepository';
import SellerRepository from '../repositories/SellerRepository';

// import SellerController from '../controllers/SellerController';

const sellerRouter = Router();

const seller_repo = new SellerRepository();
const admin_repo = new AdminRepository();

// const sellerController = new SellerController();

// sellerRouter.post('/', sellerController.create);

sellerRouter.post('/', async (request, response) => {
  const { id, name } = request.body;

  const adminExists = admin_repo.findById(id);

  if (!adminExists) {
    throw new AppError('Admin not found');
  }

  const seller = seller_repo.create(name);

  return response.status(201).json(seller);
});

export default sellerRouter;
