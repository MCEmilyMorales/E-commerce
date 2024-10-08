import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './categories.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories() {
    return this.categoriesService.getCategories();
  }

  @Post('seeder')
  async seedCategories() {
    return this.categoriesService.addCategories();
  }

  //   @Post('seeder')
  //   async seederCategories(@Body() categories: Category[]) {
  //     return this.categoriesService.addCategories(categories);
  //   }
}
