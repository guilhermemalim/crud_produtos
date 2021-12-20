import { Request, Response } from 'express';

import ProductRepository from '../repositories/ProductRepository';

import AppError from '../errors/AppError';

class ProductsController {
  private product_repo;

  constructor() {
    this.product_repo = new ProductRepository();
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, quantity } = request.body;

    const product = await this.product_repo.create(name, quantity); // erro é jogado dentro do repo

    return response.json({
      product,
    });
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    const products = await this.product_repo.all();

    return response.json({
      products,
    });
  }

  public async getByName(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { slug } = request.params;

    const product = this.product_repo.getByName(slug); // erro é jogado dentro do repo

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

    const product = await this.product_repo.updateName(slug, name); // erro é jogado dentro do repo

    return response.json({
      product,
    });
  }

  public async updateQuantity(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { quantity } = request.body;
    const { slug } = request.params;

    const product = await this.product_repo.updateQuantity(slug, quantity); // erro é jogado dentro do repo

    return response.json({
      product,
    });
  }

  public async deleteByName(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { slug } = request.params;

    await this.product_repo.deleteByName(slug); // o erro é jogado dentro do repo

    return response.sendStatus(200);
  }
}

export default ProductsController;
