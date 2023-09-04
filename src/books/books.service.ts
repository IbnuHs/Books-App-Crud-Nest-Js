import { Injectable, NotFoundException, Res } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Response } from '@nestjs/common';

@Injectable()
export class BooksService {
  private Books: any[] = [];

  getAllBooks(): any[] {
    return this.Books;
  }
  getBooks(id: string) {
    const book = this.findIndexBooks(id);
    return book;
  }

  createBooks(title: string, author: string, publisher: string) {
    this.Books.push({ id: uuidv4(), title, author, publisher });
  }

  updateBook(id: string, title: string, author: string, publisher: string) {
    const indexBook = this.findIndexBooks(id);

    this.Books[indexBook].title = title;
    this.Books[indexBook].author = author;
    this.Books[indexBook].publisher = publisher;
  }

  findIndexBooks(id: string) {
    const index = this.Books.findIndex((book) => book.id === id);
    if (index === -1) {
      throw new NotFoundException('Book Not Found');
    }

    return index;
  }
}
