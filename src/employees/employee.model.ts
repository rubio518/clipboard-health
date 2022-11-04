import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table({ underscored: true })
export class Employee extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  salary: number;

  @Column
  currency: string;

  @Column
  department: string;

  @Column
  subDepartment: string;
}
