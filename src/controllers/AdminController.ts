import { Request, Response } from 'express';
import AppError from '../errors/AppError';

import AdminRepository from '../repositories/AdminRepository';
import AppRepository from '../repositories/AppRepository';

class AdminController {
  private admin_repo: AdminRepository;

  private app_repo: AppRepository;

  constructor() {
    this.admin_repo = new AdminRepository();
    this.app_repo = new AppRepository();
  }

  public async all(request: Request, response: Response): Promise<Response> {
    const admins = await this.admin_repo.all();

    return response.json(admins);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id, name } = request.body;

    const adminExists = this.admin_repo.findById(id);

    if (!adminExists) {
      throw new AppError('Admin not found');
    }

    const admin = this.admin_repo.create(name);

    return response.status(201).json(admin);
  }

  public async editAppColor(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id, app_id, color } = request.body;

    const adminExists = this.admin_repo.findById(id);

    if (!adminExists) {
      throw new AppError('Admin not found');
    }

    const updated_app = await this.app_repo.updateColor(app_id, color);

    return response.json(updated_app);
  }
}

export default AdminController;
