import { Inject, Injectable } from '@nestjs/common';
import { DB_CONNECTION } from './database';
import { users } from './database/schema';

@Injectable()
export class AppService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: DB_CONNECTION,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getUsers() {
    return this.db.select().from(users);
  }
}
