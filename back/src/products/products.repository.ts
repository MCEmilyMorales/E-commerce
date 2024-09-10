import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Products } from './productsInterfacePrueba/productsInterfacePrueba';
import { Product } from './products.entity';
import * as data from '../utils/data.json';
import { Category } from 'src/categories/categories.entity';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }
  async addProducts() {
    if (!data) {
      throw new Error ('data is undefined')
    }
    const categories= await this.categoriesRepository.find()

    const products = data.map((prop) => {
      const category=categories.find((cat)=>cat.name === prop.category)

      if(!category){
        throw new Error(`Category not found: ${prop.category}`);
      }

        const product = new Product()
        product.name= prop.name
        product.description=prop.description
        product.price=prop.price
        product.stock=prop.stock
        product.imgUrl=prop.imgUrl
        product.category_id=category

      return product
    });
    //await this.productRepository.save(products);
    //return 'Productos cargados';
    console.log(products);
    
    return await this.productRepository.save(products);
  }
}
  // private products: Products = [
  //   {
  //     id: 1,
  //     name: 'mouse',
  //     description: 'negro',
  //     price: 5000,
  //     stock: true,
  //     imgUrl: 'http://',
  //   },
  //   {
  //     id: 2,
  //     name: 'auricular',
  //     description: 'rojo',
  //     price: 15000,
  //     stock: true,
  //     imgUrl: 'http://',
  //   },
  //   {
  //     id: 3,
  //     name: 'microfono',
  //     description: 'blanco',
  //     price: 10000,
  //     stock: true,
  //     imgUrl: 'http://',
  //   },
  // ];

  // async addProducts(products: Product[]):Promise<Product[]>{
  //   return await this.productRepository.save(products)
  // }