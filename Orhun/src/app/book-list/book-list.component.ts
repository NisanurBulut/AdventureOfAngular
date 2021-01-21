import { Component, OnInit } from '@angular/core';
import { BOOK_ITEMS } from '../book.data';
import { BookItem } from '../models/bookItem.model';
import { BookService } from './book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
  BookItems: BookItem[];
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.BookItems = this._bookService.getBookItems();
  }

}
