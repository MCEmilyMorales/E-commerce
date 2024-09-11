import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './categories.entity';
import * as data from '../utils/data.json';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class CategoriesRepository {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async onModuleInit() {
    console.log('este si sirve...');

    if (!data) {
      throw new Error('Json no encontrado!');
    }
    await Promise.all(
      data?.map(async (prop) => {
        await this.categoryRepository
          .createQueryBuilder() //se puede acceder al metodo gracias a Repository
          .insert() //se utiliza para crear y ejecutar consultas
          .into(Category)
          .values({ name: prop.category })
          .orIgnore() //declaración de ignorar adicional compatible con las bases de datos.
          .execute();
      }),
    );
    this.eventEmitter.emit('categories.loaded');
  }

  async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async addCategories() {
    data?.map(async (prop) => {
      await this.categoryRepository
        .createQueryBuilder() //se puede acceder al metodo gracias a Repository
        .insert() //se utiliza para crear y ejecutar consultas
        .into(Category)
        .values({ name: prop.category })
        .orIgnore() //declaración de ignorar adicional compatible con las bases de datos.
        .execute();
    });
    return 'categorias agregadas';
  }

  // async addCategories(categories: Category[]): Promise<Category[]> {
  //   const newCategories = this.categoryRepository.create(categories);//duda???
  //   return await this.categoryRepository.save(newCategories);
  // }
}
