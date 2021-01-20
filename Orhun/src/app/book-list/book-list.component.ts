import { Component, OnInit } from '@angular/core';
import { BOOK_ITEMS } from '../book.data';
import { BookItem } from '../models/bookItem.model';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  BookItems: BookItem[];
  constructor() { }

  ngOnInit(): void {
    this.BookItems = BOOK_ITEMS;
  }

}
