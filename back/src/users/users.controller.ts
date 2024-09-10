import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  UsePipes} from '@nestjs/common';

import { HideCredentialInterceptor } from 'src/interceptors/hide-credential.interceptor';
import { UsersDbService } from './usersDb.service';
import { Order } from 'src/orders/order.entity';
import { CreateUserDto } from './dto/CreateUserDto';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/auth/authGuard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/auth/roles.enum';
import { RolesGuard } from 'src/guards/roles.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersDbService: UsersDbService,
    private readonly authService: AuthService,
  ) {}

  @ApiBearerAuth()
  @Get()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @UseGuards(AuthGuard)
  @UseInterceptors(HideCredentialInterceptor)
  getUsers() {
    return this.usersDbService.getUsers();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @UseInterceptors(HideCredentialInterceptor)
  getUserId(@Param('id', ParseUUIDPipe) id: string, @Body() order_id: Order) {
    return this.usersDbService.getUserId(id, order_id);
  }

  // @Post()
  // @UseInterceptors(HideCredentialInterceptor)
  // async postUserCreate(@Body() user: CreateUserDto) {
  //   return this.authService.signUp(user)
  // }

  
  @Put(':id')
  @UsePipes()
  @UseGuards(AuthGuard)
  @UseInterceptors(HideCredentialInterceptor)
  putUserUpdate(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() user: CreateUserDto,
  ) {
    return this.usersDbService;
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteUserDelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersDbService;
  }
}
