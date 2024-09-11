import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/CreateOrderDto';
import { AuthGuard } from 'src/auth/authGuard';
import { ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/roles.enum';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async addOrder(@Body() createOrderDto: CreateOrderDto) {
    const productIds = createOrderDto.products.map((product) => product.id);
    const order = await this.ordersService.addOrder(
      createOrderDto.userId,
      productIds,
    );
    return order;
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async getOrder(@Query('id') id: string) {
    console.log(id);

    return await this.ordersService.getOrder(id);
  }
}
