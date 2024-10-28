import { ApiProperty } from "@nestjs/swagger";

export class CreateProdutorDto {
  @ApiProperty()
  documento: string;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  nome_fazenda: string;
  @ApiProperty()
  cidade: string;
  @ApiProperty()
  estado: string;
  @ApiProperty({type: 'number'})
  area_total: number;
  @ApiProperty({type: 'number'})
  area_cultivavel: number;
  @ApiProperty({type: 'number'})
  area_vegetacao: number;
  @ApiProperty()
  cultivos: string;
}
