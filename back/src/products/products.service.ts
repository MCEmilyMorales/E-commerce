import { Inject, Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { Product } from "./products.entity";

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}
  getProducts() {
    return this.productsRepository.getProducts();
  }
  async addProducts(){
    return await this.productsRepository.addProducts()
  }
  // addProducts(products: Product[]){
  //     return this.productsRepository.addProducts(products)
  // }
}