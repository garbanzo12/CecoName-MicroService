import { Entity, Column, PrimaryColumn } from 'typeorm';

// Se especifica la tabla con la que se va a trabajar (CecoName) del schema dbo
@Entity({ name: 'CecoName', schema: 'dbo' })
export class CompanyEntity {
  @PrimaryColumn({ type: 'int' })
  Id;

  @Column({ type: 'int' })
  Cecocode;

  @Column({ type: 'nvarchar', length: 255 })
  Name;

  @Column({ type: 'int' })
  State;

  @Column({ type: 'nvarchar', length: 255 })
  CreatedBy;

  @Column({ type: 'nvarchar', length: 255 })
  UpdatedBy;

  @Column({ type: 'nvarchar', length: 255 })
  UpdateAt;
}