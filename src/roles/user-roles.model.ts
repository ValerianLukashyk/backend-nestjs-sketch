import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';
import { Role } from './roles.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: 1, description: 'Unique User ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => Role)
  @ApiProperty({ example: '12345', description: 'ID of the role' })
  @Column({
    type: DataType.NUMBER,
  })
  roleId: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: '12345', description: 'ID of the User' })
  @Column({
    type: DataType.NUMBER,
  })
  userId: number;
}
