import { Router } from 'express';

import SellerController from '../controllers/SellerController';

const sellerRouter = Router();
const sellerController = new SellerController();

sellerRouter.post('/', sellerController.create);

export default sellerRouter;
