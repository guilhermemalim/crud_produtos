// adicionar uma empresa e um admin
import Admin from '../schemas/Admin';
import App from '../schemas/App';

async function seed(): Promise<void> {
  const apps = await App.find();

  if (apps.length == 0) {
    await App.create({
      app_color: '#054f77', // "azul camarada"
      cnpj: 'XX.XXX.XXX/0001-XX',
      name: 'infinityJS',
    });

    console.log('criando empresa inicial');
  }

  const admins = await Admin.find();

  if (admins.length == 0) {
    await Admin.create({
      name: 'admin',
    });

    console.log('criando admin incial');
  }
}

export default seed;
