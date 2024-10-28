import { classToPlain } from 'class-transformer';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeUpdate,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  data_criacao: Date;

  @Column({ type: 'timestamp', nullable: true, default: null })
  data_alteracao?: Date;

  toJSON() {
    return classToPlain(this);
  }

  @BeforeUpdate()
  async update() {
    this.data_alteracao = new Date();
  }
}