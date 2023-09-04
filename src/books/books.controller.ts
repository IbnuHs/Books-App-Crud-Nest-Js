import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getHello(): string {
    return 'Hello';
  }
}
