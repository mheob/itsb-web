import {
  IsEmail,
  IsString,
  Matches,
  MinLength,
  MaxLength,
} from 'class-validator';

export class FormDto {
  @MinLength(3)
  @MaxLength(128)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @Matches(/(^$|^(\(?([\d -)–+/(]+){6,}\)?([ .-–/]?)([\d]+))$)/)
  readonly phone: string;

  @IsString()
  @MinLength(30)
  @MaxLength(10240)
  readonly message: string;
}
