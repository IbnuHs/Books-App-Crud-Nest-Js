import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Book } from 'src/entity/Book.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nest_tester',
  entities: [Book],
  synchronize: true,
};
