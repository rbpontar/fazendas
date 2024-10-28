import { Controller, Get, Param } from "@nestjs/common";
import { ProdutorService } from "src/produtor/produtor.service";
import { DashboardService } from "./dashboard.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("dashboard")
@ApiTags("dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('total/estados')
  totalPorEstado() {
    return this.dashboardService.totalPorEstado(null);
  }

  @Get('total/hertares')
  totalEmHectares() {
    return this.dashboardService.totalEmHectares();
  }

  @Get('total/fazendas')
  totalFazendas() {
    return this.dashboardService.totalFazendas();
  }

  @Get('total/uso')
  totalUso() {
    return this.dashboardService.totalUso();
  }
}
