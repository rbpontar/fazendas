import { Injectable } from "@nestjs/common";
import { ProdutorService } from "src/produtor/produtor.service";

@Injectable()
export class DashboardService {
  constructor(private readonly projetoService: ProdutorService) {}

  public async totalPorEstado(estado: string) {
    try {
      const result = await this.projetoService.totalPorEstado();
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  public async totalEmHectares() {
    try {
      const result = await this.projetoService.totalEmHectares();
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  public async totalFazendas() {
    try {
      const result = await this.projetoService.totalFazendas();
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  public async totalUso() {
    try {
      const result = await this.projetoService.totalUso();
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
