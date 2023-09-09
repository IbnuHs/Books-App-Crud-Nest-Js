import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { get } from 'http';
import { CreateBookDto } from './dto/cerate book dto';
import { updateBookDto } from './dto/updateBook dto';
import { Book } from 'src/entity/Book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}
  @Get()
  getAllBooks() {
    return this.bookService.GetAllBook();
  }

  @Get(':id')
  getBook(@Param('id') id: string) {
    return this.bookService.getBookById(id);
  }

  @Post('/addBook')
  @UsePipes(ValidationPipe)
  async createBooks(@Body() payload: CreateBookDto): Promise<Book> {
    return this.bookService.AddBook(payload);
  }

  @Put('editBook')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  async editBook(
    @Param(':id') id: string,
    @Body() payload: updateBookDto,
  ): Promise<Book> {
    return this.bookService.updateBook(id, payload);
  }

  @Delete('deleteBook')
  @UsePipes(ValidationPipe)
  async deleteBook(@Param(':id') id: string): Promise<string> {
    return await this.bookService.DeleteBook(id);
  }
}
