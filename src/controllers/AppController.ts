import { Request, Response } from 'express';

import AppRepository from '../repositories/AppRepository';

class AppController {
  private app_repo: AppRepository;

  constructor() {
    this.app_repo = new AppRepository();
  }

  public async all(request: Request, response: Response): Promise<Response> {
    const apps = await this.app_repo.all();

    return response.json(apps);
  }
}

export default AppController;
