import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './order.entity';
import { User } from 'src/users/user.entity';
import { OrderDetails } from 'src/orderDetails/orderDetails.entity';
import { Product } from 'src/products/products.entity';
import { OrderRepository } from './orders.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, OrderDetails, Product])],
  controllers: [OrdersController],
  providers: [OrdersService, OrderRepository],
})
export class OrdersModule {}
