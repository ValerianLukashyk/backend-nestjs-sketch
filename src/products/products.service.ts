import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodId = (Math.random() * 1000000000 + Math.random() * 1000000000)
      .toString()
      .replace(/\./g, '-');
    console.log(prodId);
    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(id: string) {
    const [product] = this.findProduct(id);
    if (!product) {
      throw new NotFoundException();
    }
    return { ...product };
  }

  updateProduct(id: string, title: string, desc: string, price: number) {
    const [product, index] = this.findProduct(id);
    const updatedProduct = { ...product };
    if (title) updatedProduct.title = title;
    if (desc) updatedProduct.desc = desc;
    if (price) updatedProduct.price = price;
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  deleteProduct(id: string) {
    const index = this.findProduct(id)[1];
    this.products.splice(index, 1);
  }
  private findProduct(id: string): [Product, number] {
    const index = this.products.findIndex((p) => p.id === id);
    const product = this.products[index];
    if (!product) {
      throw new NotFoundException();
    }
    return [product, index];
  }
}
