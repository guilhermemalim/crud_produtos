import Admin, { IAdminDocument } from '../schemas/Admin';

class AdminRepository {
  public async all(): Promise<IAdminDocument[]> {
    const admins = await Admin.find();

    return admins;
  }

  public async create(admin_name: string): Promise<IAdminDocument> {
    const admin = await Admin.create({
      name: admin_name,
    });

    return admin;
  }

  public async findById(id: string): Promise<IAdminDocument | null> {
    const admin = await Admin.findById(id);

    return admin;
  }
}

export default AdminRepository;
