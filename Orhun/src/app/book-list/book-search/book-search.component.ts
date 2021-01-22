import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookItem } from 'src/app/models/bookItem.model';
import { BookService } from '../book.service';
import { takeUntil, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  volumeArrays: BookItem[] = [];
  @Output() searchResultBookItems: EventEmitter<BookItem[]> = new EventEmitter();

  private searchStream = new Subject<string>();
  constructor(private _bookService: BookService) { }
  ngOnInit(): void {
  }

  clearBookItems(): void {
    this.volumeArrays.splice(0);
  }
  onSearchBookName(bookName: string) {

    if (bookName.length > 1) {
      const volumInfos = this._bookService.getBookItems(bookName)
        .pipe(takeUntil(this.searchStream),
          delay(300))
        .subscribe(result => {
          this.volumeArrays.splice(0);
          result.items.map((book) => {

            const publisher = book.volumeInfo.publisher;
            const infoLink = book.volumeInfo.infoLink;
            const title = book.volumeInfo.title;
            const description = book.volumeInfo.description;
            const authors = (book.volumeInfo['authors']) ? book.volumeInfo.authors.join(',') : '';
            const imageLink = (book.volumeInfo['imageLinks']) ? book.volumeInfo.imageLinks.smallThumbnail : '';
            this.volumeArrays.push(new BookItem(book.id, title, description, imageLink, authors, infoLink, publisher));
          });
        });
      this.searchResultBookItems.emit(this.volumeArrays);
    }
  }
}
