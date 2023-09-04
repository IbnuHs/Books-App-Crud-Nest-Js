import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { get } from 'http';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}
  @Get()
  getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: string) {
    return this.bookService.getBooks(id);
  }

  @Post('/addBook')
  createBooks(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('publisher') publisher: string,
  ) {
    return this.bookService.createBooks(title, author, publisher);
  }

  @Put('editBook')
  editBook(
    @Body('id') id: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('publisher') publisher: string,
  ) {
    return this.bookService.updateBook(id, title, author, publisher);
  }
}
