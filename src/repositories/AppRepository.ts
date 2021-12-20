import App, { IAppDocument } from '../schemas/App';
import AppError from '../errors/AppError';

// TODO remover o tratamento de erro daqui

class AppRepository {
  public async all(): Promise<IAppDocument[]> {
    const apps = await App.find();

    return apps;
  }

  public async updateColor(id: string, color: string): Promise<IAppDocument> {
    // color no formato #fffff (com # no começo)
    const app = await App.findOne({
      id,
    });

    if (!app) {
      throw new AppError('App not found');
    }

    app.app_color = color;

    await app.save(); // só vai ter um 'app' -> que é associado ao cnpj

    if (!app) {
      throw new AppError('App not found');
    }

    return app;
  }
}

export default AppRepository;
