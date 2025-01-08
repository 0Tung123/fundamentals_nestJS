import { IS_UPPERCASE, IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class UserSignUpDto{
  @IsNotEmpty({ message: 'name is required' })
  @IsString({ message: 'name must be a string' })
  name: string;
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail({}, { message: 'email must be a valid email' })
  email: string;
  @IsNotEmpty({ message: 'password is required' })
  @IsStrongPassword({ minSymbols: 0, minUppercase: 0, minNumbers: 0 }, { message: 'password must be strong 1 character uppercase, 1 lowercase, 1 number, 1 symbol' })
  password: string;
}
