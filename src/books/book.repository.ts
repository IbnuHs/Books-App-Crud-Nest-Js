import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entity/Book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly boo,
  ) {}
}
