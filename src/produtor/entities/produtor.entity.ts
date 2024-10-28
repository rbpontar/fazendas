import { BaseEntity } from 'src/shared/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'produtor' })
export class Produtor extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  documento: string;
  @Column({ type: 'varchar', length: 100 })
  nome: string;
  @Column({ type: 'varchar', length: 100 })
  nome_fazenda: string;
  @Column({ type: 'varchar', length: 100 })
  cidade: string;
  @Column({ type: 'varchar', length: 100 })
  estado: string;
  @Column({ type: 'decimal' })
  area_total: number;
  @Column({ type: 'decimal' })
  area_cultivavel: number;
  @Column({ type: 'decimal' })
  area_vegetacao: number;
  @Column({ type: 'varchar', length: 1000 })
  cultivos: string;
}


 