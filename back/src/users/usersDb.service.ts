import { Injectable } from '@nestjs/common';

import { UsersRepository } from './users.repository';
import { Order } from 'src/orders/order.entity';

@Injectable()
export class UsersDbService {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) {} 

  getUsers() {
    return this.usersRepository.getUsers();
  }

  getUserId(userId: string, order_id: Order) {
    return this.usersRepository.getUserId(userId, order_id);
  }
  putUserUpdate() {}

  deleteUserDelete() {}
}
