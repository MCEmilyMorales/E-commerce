import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID, isNotEmpty } from "class-validator";
import { Product } from "src/products/products.entity";

export class CreateOrderDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;
  
  @ApiProperty({
    description:'Debes cargar al menos 1 producto',
    example: 'Producto',
  })
  @IsArray()
  @ArrayMinSize(1)
  products: Partial<Product[]>
}
