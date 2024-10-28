import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProdutorModule } from "./produtor/produtor.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: "postgres",
      host: "db",
      port: 5432,
      password: "1234",
      username: "postgres",
      entities: [],
      database: "postgres",
      synchronize: true,
      logging: false,
    }),
    ProdutorModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
