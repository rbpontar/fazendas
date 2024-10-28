import { ApiProperty } from "@nestjs/swagger";

export class ResponseDto {
  @ApiProperty()
  message: string;
  @ApiProperty()
  status: number;
}
