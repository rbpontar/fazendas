import { Module } from "@nestjs/common";
import { DashboardController } from "./dashboard.controller";
import { DashboardService } from "./dashboard.service";
import { ProdutorService } from "src/produtor/produtor.service";
import { ProdutorModule } from "src/produtor/produtor.module";

@Module({
  imports: [ProdutorModule],
  controllers: [DashboardController],
  providers: [DashboardService],
  exports: [DashboardService],
})
export class DashboardModule {}
