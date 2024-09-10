import { Body, Controller, Delete, Get, Post, Put, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./products.entity";
import { AuthGuard } from "src/auth/authGuard";
import { Roles } from "src/decorators/roles.decorator";
import { Role } from "src/auth/roles.enum";
import { RolesGuard } from "src/guards/roles.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }
  @Get(':id')
  getProductsId() {}

  @Post('seeder') //para la precarga de productos
  async addProducts() {
    return await this.productsService.addProducts();
  }
  // @Post('seeder')
  // addProducts(@Body() products: Product[]) {
  //   return this.productsService.addProducts(products);
  // }
  @ApiBearerAuth()
  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  getProductUpdate() {}
  @Delete('.id')
  getProductDelete() {}
}