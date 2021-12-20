import Seller, { ISellerDocument } from '../schemas/Seller';

class SellerRepository {
  public async all(): Promise<ISellerDocument[]> {
    const sellers = Seller.find();

    return sellers;
  }

  public async create(seller_name: string): Promise<ISellerDocument> {
    const seller = await Seller.create({
      name: seller_name,
    });

    return seller;
  }
}

export default SellerRepository;
