import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Res,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/cerate book dto';
import { Book } from 'src/entity/Book.entity';
import { updateBookDto } from './dto/updateBook dto';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async GetAllBook(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async AddBook(data: Partial<Book>): Promise<Book> {
    const newBook = this.bookRepository.create(data);
    return this.bookRepository.save(newBook);
  }

  async getBookById(id: string): Promise<Book> {
    const book = await this.bookRepository.findOne({ where: { id: id } });
    if (!Book) throw new NotFoundException('Book Not Founds');
    return book;
  }

  async updateBook(id: string, data: updateBookDto): Promise<Book> {
    let book = await this.getBookById(id);
    // book = { ...book, ...data };
    const updatedBook = await this.bookRepository.save({
      id: book.id,
      ...data,
    });

    return updatedBook;
  }

  async DeleteBook(id: string): Promise<string> {
    let book = await this.getBookById(id);
    if (!book) throw new NotFoundException('Book Not Found');
    await this.bookRepository.delete(book.id);

    // return book;

    return `book with id ${book.id} succesfully deleted`;
  }
}
