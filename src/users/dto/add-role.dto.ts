import { IsNumber, IsString } from 'class-validator';

export class addRoleDto {
  @IsString({ message: 'Value must be a string' })
  readonly value: string;
  @IsNumber({}, { message: 'UserID must be a number' })
  readonly userId: number;
}
