import { Router } from 'express';

import productsRouter from './products.routes';
import sellerRouter from './seller.routes';
import adminRouter from './admin.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/seller', sellerRouter);
routes.use('/admin', adminRouter);

export default routes;
