import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
export class CreateEmployeeDto {
  @IsNumber()
  salary: number;

  @IsString()
  currency: string;

  @IsString()
  department: string;

  @IsOptional()
  subDepartment?: string;

  @IsBoolean()
  @IsOptional()
  onContract?: boolean;
}
