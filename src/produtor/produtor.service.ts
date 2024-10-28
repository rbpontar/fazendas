import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateProdutorDto } from "./dto/create-produtor.dto";
import { UpdateProdutorDto } from "./dto/update-produtor.dto";
import { ResponseDto } from "src/shared/dto/response.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseService } from "src/shared/base.service";
import { Produtor } from "./entities/produtor.entity";
import { cnpj, cpf } from "cpf-cnpj-validator";

@Injectable()
export class ProdutorService extends BaseService<Produtor> {
  constructor(
    @InjectRepository(Produtor)
    public readonly repo: Repository<Produtor>
  ) {
    super(repo, Produtor);
  }

  validar(createProdutorDto: CreateProdutorDto) {
    const response = new ResponseDto();
    response.message = "";
    if (
      !cpf.isValid(createProdutorDto.documento) &&
      !cnpj.isValid(createProdutorDto.documento)
    ) {
      response.status = HttpStatus.BAD_GATEWAY;
      response.message = "Documento inválido";
      return response;
    }

    const erro_area =
      createProdutorDto.area_total <
      createProdutorDto.area_cultivavel + createProdutorDto.area_vegetacao;

    if (erro_area) {
      response.status = HttpStatus.BAD_GATEWAY;
      response.message = "Área inválida";
      return response;
    }
    return null;
  }

  async create(createProdutorDto: CreateProdutorDto) {
    try {
      const response = this.validar(createProdutorDto);

      if (response) return response;

      const entity = Object.assign(new this.klass(), createProdutorDto);
      const g = await this.repo.insert(entity);
      const result = await this.findOne(g.generatedMaps[0].id);
      return result;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async find() {
    try {
      const objeto = await this.repo.find();
      if (!objeto) {
        return null;
      }
      return objeto;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      const objeto = await this.repo.findBy({ id: id });
      if (!objeto) {
        return null;
      }
      return objeto;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async totalPorEstado() {
    try {
      const sql = `select estado, sum(area_total) area_total, sum(area_cultivavel) area_cultivavel, sum(area_vegetacao) area_vegetacao 
      from produtor p 
      group by estado`;

      const result = await this.repo.manager.query(sql);
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async totalFazendas() {
    try {
      const sql = `select count(1) total from produtor`;
      const result = await this.repo.manager.query(sql);
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async totalEmHectares() {
    try {
      const sql = `select sum(area_total) total from produtor`;
      const result = await this.repo.manager.query(sql);
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async totalUso() {
    try {
      const sql = `select sum(area_cultivavel) area_cultivavel, sum(area_vegetacao) area_vegetacao from produtor`;
      const result = await this.repo.manager.query(sql);
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  

  async update(id: string, updateProdutorDto: UpdateProdutorDto) {
    try {
      const obj = await this.findOne(id);
      if (!obj) {
        throw new Error("Registro não encontrado.");
      }
      const entity = Object.assign(new this.klass(), updateProdutorDto);

      // entity.dataUltimaAlteracao = new Date();
      const r = await this.repo.update(id, entity);
      return r;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string) {
    try {
      return await this.repo.delete(id);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
