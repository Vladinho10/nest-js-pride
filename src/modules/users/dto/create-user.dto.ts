import { IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public name: string;

  @IsNumber()
  public age: number;

  @IsString()
  public email: string;
}
