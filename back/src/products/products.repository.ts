import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Products } from './productsInterfacePrueba/productsInterfacePrueba';
import { Product } from './products.entity';
import * as data from '../utils/data.json';
import { Category } from 'src/categories/categories.entity';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {}

  @OnEvent('categories.loaded')
  async handleCategoriesLoaded() {
    console.log('Evento categories.loaded capturado. Cargando productos...');
    await this.loadProducts();
  }

  async loadProducts() {
    if (!data) {
      throw new Error('Json no encontrado!');
    }
    const loadProduct = data?.map(async (prop) => {
      // Busca la categoría ya insertada
      const category = await this.categoriesRepository.findOneBy({
        name: prop.category,
      });
      console.log(category);

      if (!category) {
        console.log(`Categoría no encontrada para el producto ${prop.name}`);
        return;
      }

      // Inserta el producto asociado a la categoría
      await this.productRepository
        .createQueryBuilder()
        .insert()
        .into(Product)
        .values({
          name: prop.name,
          description: prop.description,
          price: prop.price,
          stock: prop.stock,
          imgUrl: prop.imgUrl,
          category: category, // Relación con la categoría
        })
        .orIgnore() // Ignora si ya existe el producto
        .execute();
    });

    // Espera a que todas las inserciones de productos se completen
    await Promise.all(loadProduct);
  }

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async addProducts() {
    if (!data) {
      throw new Error('data is undefined');
    }
    const categories = await this.categoriesRepository.find();

    const products = data.map((prop) => {
      const category = categories.find((cat) => cat.name === prop.category);

      if (!category) {
        throw new Error(`Category not found: ${prop.category}`);
      }

      const product = new Product();
      product.name = prop.name;
      product.description = prop.description;
      product.price = prop.price;
      product.stock = prop.stock;
      product.imgUrl = prop.imgUrl;
      product.category = category;

      return product;
    });

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
