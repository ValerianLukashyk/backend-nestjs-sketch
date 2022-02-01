import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unique User ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: 'This is post title example',
    description: 'Post title',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;
  @ApiProperty({ example: 'abcdefjh123456', description: 'User password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;

  @Column({
    type: DataType.STRING,
  })
  image: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
