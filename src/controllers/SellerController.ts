import { Request, Response } from 'express';
import AppError from '../errors/AppError';

import SellerRepository from '../repositories/SellerRepository';
import AdminRepository from '../repositories/AdminRepository';

class SellerController {
  private seller_repo: SellerRepository;

  private admin_repo: AdminRepository;

  constructor() {
    this.seller_repo = new SellerRepository();
    this.admin_repo = new AdminRepository();
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id, name } = request.body;

    const adminExists = this.admin_repo.findById(id);

    if (!adminExists) {
      throw new AppError('Admin not found');
    }

    const seller = this.seller_repo.create(name);

    return response.status(201).json(seller);
  }
}

export default SellerController;
