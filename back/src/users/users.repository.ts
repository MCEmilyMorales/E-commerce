import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { Order } from 'src/orders/order.entity';
import { CreateUserDto } from './dto/CreateUserDto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async getUsers() {
    return await this.usersRepository.find();
  }

  async getUserId(userId: string, order_id: Order) {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    const order = await this.orderRepository.findOne({
      where: { orderDetails: order_id },
    });
    return { user, ...order };
  }
  
  async postUserCreate(user: CreateUserDto) {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  putUserUpdate() {}

  deleteUserDelete() {}
}
