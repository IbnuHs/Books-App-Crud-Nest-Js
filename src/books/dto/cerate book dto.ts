import { IsString, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  publisher: string;

  @IsNotEmpty()
  @Type(() => Number)
  tahun: string;
}
