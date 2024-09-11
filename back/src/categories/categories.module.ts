import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoriesRepository } from './categories.repository';
import { Category } from './categories.entity';
import { Product } from 'src/products/products.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoriesService, CategoriesRepository, EventEmitter2],
  controllers: [CategoriesController],
})
export class CategoriesModule {}

