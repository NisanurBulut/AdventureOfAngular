import { Component, OnInit } from '@angular/core';
import { BookItem } from 'src/app/models/bookItem.model';
import { BookService } from '../book.service';
import { takeUntil, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as bookListActions from '../../store/book-list.actions';
@Component({
  selector: 'book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  private searchStream = new Subject<string>();
  constructor(private _bookService: BookService, private store: Store<{ bookList: BookItem[] }>) {
  }
  ngOnInit(): void { }

  clearBookItems(): void {
    this.store.dispatch(new bookListActions.DeleteBookList());
  }
  onSearchBookName(bookName: string) {

    if (bookName.length > 1) {
      const volumInfos = this._bookService.getBookItems(bookName)
        .pipe(takeUntil(this.searchStream),
          delay(300))
        .subscribe(result => {
          this.clearBookItems();
          result.items.map((book) => {
            const publisher = book.volumeInfo.publisher;
            const infoLink = book.volumeInfo.infoLink;
            const title = book.volumeInfo.title;
            const description = book.volumeInfo.description;
            const authors = (book.volumeInfo['authors']) ? book.volumeInfo.authors.join(',') : '';
            const imageLink = (book.volumeInfo['imageLinks']) ? book.volumeInfo.imageLinks.smallThumbnail : '';
            this.store.dispatch(
              new bookListActions.AddBookItem(new BookItem(book.id, title, description, imageLink, authors, infoLink, publisher)));
          });
        });
    }
  }
}
