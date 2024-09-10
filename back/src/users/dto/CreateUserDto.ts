import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsString, IsStrongPassword, Length, MinLength} from 'class-validator';
export class CreateUserDto {
  @ApiProperty({
    description: 'El nombre del usuario debe contener como mínimo 3 caracteres',
    example: 'Fulanito',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 80)
  name: string;

  @ApiProperty({
    description: 'Debe ser un Email válido',
    example: 'example@email.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'La password debe contener mínimo 8 caracteres',
    example: '********',
  })
  @IsStrongPassword()
  @Length(8, 15)
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'Debes completar con una direccion valida',
    example: 'Calle falsa 1234',
  })
  @IsNotEmpty()
  @Length(3, 80)
  address: string;

  @ApiProperty({
    description: 'Debes completar con un teléfono valido',
    example: '11-0000000',
  })
  @IsNotEmpty()
  phone: number;

  @ApiProperty({
    description: 'No es obligatorio cargar el pais',
    example: 'Argentina',
  })
  @IsOptional()
  @IsString()
  @Length(5, 20)
  country: string;

  @ApiProperty({
    description: 'No es obligatorio cargar la ciudad',
    example: 'Córdoba',
  })
  @IsOptional()
  @IsString()
  @Length(5, 20)
  city: string;

  @ApiProperty({
    description:
      'Asignada por default al momento de crear el usuario, no debe ser incluida en el body',
    default: false,
  })
  @IsEmpty()
  isAdmin: boolean;
}
