import { Request, Response } from 'express';
import slugify from 'slugify';
import AppError from '../errors/AppError';

import IProduct from '../models/IProduct';

const products: IProduct[] = [];

class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, quantity } = request.body;

    const productAlreadyRegistered = products.find(p => p.name == name);

    if (productAlreadyRegistered) {
      throw new AppError('Produto já cadastrado');
    }

    const product: IProduct = {
      name,
      quantity,
      slug: slugify(name),
    };

    products.push(product);

    return response.json({
      product,
    });
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    return response.json({
      products,
    });
  }

  public async getByName(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { slug } = request.params;

    const product = products.find(p => p && p.slug == slug);

    if (!product) {
      throw new AppError('Produto não cadastrado', 404);
    }

    return response.json({
      product,
    });
  }

  public async updateName(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name } = request.body;
    const { slug } = request.params;

    const index = products.findIndex(product => product.slug == slug);

    if (index == -1) {
      throw new AppError('Produto não cadastrado', 404);
    }

    products[index].name = name;
    products[index].slug = slugify(name);

    return response.json({
      product: products[index],
    });
  }

  public async updateQuantity(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { quantity } = request.body;
    const { slug } = request.params;

    const index = products.findIndex(product => product.slug == slug);

    if (index == -1) {
      throw new AppError('Produto não cadastrado', 404);
    }

    products[index].quantity = quantity;

    return response.json({
      product: products[index],
    });
  }

  public async deleteByName(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { slug } = request.params;

    const index = products.findIndex(product => product.slug == slug);

    if (index == -1) {
      throw new AppError('Produto não cadastrado', 404);
    }

    products.slice(index, 1);

    return response.sendStatus(200);
  }
}

export default ProductsController;
