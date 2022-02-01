import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'example@mail.com', description: 'User email' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Not valid email address' })
  readonly email: string;
  @ApiProperty({ example: 'abcdefgh123456', description: 'User password ' })
  @IsString({ message: 'Must be a string' })
  @Length(6, 20, { message: 'Minimum: 6 symbols. Maximum 20 symbols.' })
  readonly password: string;
}
