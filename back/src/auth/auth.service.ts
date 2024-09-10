import * as bcrypt from 'bcrypt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDto } from 'src/users/dto/CreateUserDto';
import { UsersRepository } from 'src/users/users.repository';
import { Role } from './roles.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService
  ) {}

  getAuth() {
    return `Get all AuthService`;
  }
async signIn(email: string, password: string) {
  const dbUser = await this.usersRepository.findByEmail(email);
  if (!dbUser) {
    throw new BadRequestException('Error en las credenciales 1');
  }
  const isPasswordValid = bcrypt.compare(password, dbUser.password )
  if(!isPasswordValid){
    throw new BadRequestException('Error en las credenciales 2');
  }

  const userPayload = {
    sub:dbUser.id,//suscribe ??
    id: dbUser.id,
    email: dbUser.email,
    roles: [dbUser.isAdmin ? Role.Admin : Role.User]
  } 

  const token = this.jwtService.sign(userPayload)
  return { success: '¡Logueado exitosamente!', token };
}
  async signUp(user: CreateUserDto) {
    const dbUser = await this.usersRepository.findByEmail(user.email);
    if (dbUser) {
      throw new BadRequestException('Ya existe el correo electrónico');
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    if (!hashedPassword) {
      throw new BadRequestException('No se pudo aplicar hash a la contraseña');
    }
    await this.usersRepository.postUserCreate({
      ...user,
      password: hashedPassword,
    });
    return user;
    //return { success: '¡Usuario creado exitosamente!' };
  }
}
