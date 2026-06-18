import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  private books: any[] = [];

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books[id];
  }

  create(book: any) {
    this.books.push(book);
    return book;
  }

  update(id: number, book: any) {
    this.books[id] = book;
    return this.books[id];
  }

  remove(id: number) {
    const deletedBook = this.books[id];
    this.books.splice(id, 1);
    return deletedBook;
  }
}
