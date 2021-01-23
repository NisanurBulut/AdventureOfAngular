import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookItem } from '../models/bookItem.model';
import { BookService } from './book.service';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
  bookList: Observable<{ bookList: BookItem[] }>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.bookList = this.store.select('bookList');
  }
}
