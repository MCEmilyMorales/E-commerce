import { PickType } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/CreateUserDto";

export class LoginUserDto extends PickType (CreateUserDto, [
  'email',
  'password',
]) {}