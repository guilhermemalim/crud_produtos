import slugify from 'slugify';
import Product, { IProductDocument } from '../schemas/Product';
import AppError from '../errors/AppError';

// TODO remover o tratamento de erro daqui

class ProductRepository {
  public async all(): Promise<IProductDocument[]> {
    const products = await Product.find();

    return products;
  }

  public async create(
    name: string,
    quantity: number,
  ): Promise<IProductDocument> {
    const productExists = await Product.findOne({
      name,
    });

    if (productExists) {
      throw new AppError('Produto já cadastrado');
    }

    const product = await Product.create({
      name,
      quantity,
      slug: slugify(name),
    });

    return product;
  }

  public async getByName(slug: string): Promise<IProductDocument | null> {
    const product = Product.findOne({
      slug,
    });

    if (!product) {
      throw new AppError('Produto não cadastrado');
    }

    return product;
  }

  public async updateName(
    slug: string,
    name: string,
  ): Promise<IProductDocument | null> {
    const product = await Product.findOne({
      slug,
    });

    if (!product) {
      throw new AppError('Produto não cadastrado');
    }

    product.name = name;
    product.slug = slugify(name);

    await product.save();

    return product;
  }

  public async updateQuantity(
    slug: string,
    quantity: number,
  ): Promise<IProductDocument | null> {
    const product = await Product.findOne({
      slug,
    });

    if (!product) {
      throw new AppError('Produto não cadastrado');
    }

    product.quantity = quantity;

    await product.save();

    return product;
  }

  public async deleteByName(slug: string): Promise<void> {
    const product = await Product.findOne({
      slug,
    });

    if (!product) {
      throw new AppError('Produto não cadastrado');
    }

    await product.delete();
  }
}

export default ProductRepository;
