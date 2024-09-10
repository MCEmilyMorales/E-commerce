import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/LoginUserDto";

import { CreateUserDto } from "src/users/dto/CreateUserDto";
import { HideCredentialInterceptor } from "src/interceptors/hide-credential.interceptor";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAuth() {
    return this.authService.getAuth();
  }

  @Post('signin')
  async signIn(@Body() credentials: LoginUserDto) {
    return await this.authService.signIn(
      credentials.email,
      credentials.password,
    );
  }

  @Post('signup')
  @UseInterceptors(HideCredentialInterceptor)
  async signUp(@Body() user: CreateUserDto) {
    return await this.authService.signUp(user);
  }
}