import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Repository, DeleteResult, UpdateResult } from "typeorm";
import { BaseEntity } from "./base.entity";

@Injectable()
export class BaseService<T extends BaseEntity> {
  constructor(
    protected readonly repo: Repository<T>,
    protected klass: new () => T
  ) {}

  public async findAll(): Promise<T[]> {
    try {
      return await this.repo.find();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
