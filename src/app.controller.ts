import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('health')
@ApiTags('health-check')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "Api Status",
  })
  
  health(): string {
    return 'Gateway is on';
  }
}
