import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'El nombre público es obligatorio' })
  displayName: string;

  @IsString()
  @IsNotEmpty({ message: 'El idioma nativo es obligatorio' })
  nativeLanguage: string;
}
