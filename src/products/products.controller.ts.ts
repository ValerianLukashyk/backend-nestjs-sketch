import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  addProduct(
    @Body() completeBody: { title: string; description: string; price: number },
  ): any {
    const { title, description, price } = completeBody;
    const returnedId = this.productsService.insertProduct(
      title,
      description,
      price,
    );
    return { id: returnedId };
  }
  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getSpecificProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body() completeBody: { title: string; desc: string; price: number },
  ) {
    const { title, desc, price } = completeBody;
    const uProduct = this.productsService.updateProduct(
      prodId,
      title,
      desc,
      price,
    );
    return uProduct;
  }

  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return prodId;
  }
}
