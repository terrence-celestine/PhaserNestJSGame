import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { BooksService } from './books.service';

import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async GetBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get(':bookID')
  async GetBook(@Param('bookID') bookID) {
    const book = await this.booksService.getBook(bookID);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDto: CreateBookDto) {
    const book = await this.booksService.addBook(createBookDto);
    return `Thanks for creating this book: ${JSON.stringify(book)}`;
  }

  @Delete()
  async deleteBook(@Query() query) {
    const books = await this.booksService.deleteBook(query.bookID);
    return books;
  }

}
