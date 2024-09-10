import { Injectable } from '@nestjs/common';
import { OrderRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrderRepository) {}
  async addOrder(userId: string, products: any) {
    return await this.orderRepository.addOrder(userId, products);
  }
  async getOrder(id: string) {
    console.log(id);
    
    return await this.orderRepository.getOrder(id);
  }
}
