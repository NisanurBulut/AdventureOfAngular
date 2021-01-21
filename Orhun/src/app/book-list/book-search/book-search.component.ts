import { Component, OnInit } from '@angular/core';
import { BookItem } from 'src/app/models/bookItem.model';
import { BookService } from '../book.service';
import { tap, takeUntil, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  providers: [BookService]
})
export class BookSearchComponent implements OnInit {
  volumeArrays: BookItem[] = [];
  private searchStream = new Subject<string>();
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
  }

  onSearchBookName(bookName: string) {
    console.log(bookName);
    this._bookService.clearBookItems();
    if (bookName) {
      const volumInfos = this._bookService.getBookItems(bookName)
        .pipe(takeUntil(this.searchStream),
          delay(300))
        .subscribe(result => {
          result.items.map((book) => {
            const title = book.volumeInfo.title;
            const description = book.volumeInfo.description;
            const authors = (book.volumeInfo['authors']) ? book.volumeInfo.authors.join(',') : '';
            const imageLink = (book.volumeInfo['imageLinks']) ? book.volumeInfo.imageLinks.smallThumbnail : '';
            this._bookService.addBookItem(new BookItem(book.id, title, description, imageLink, authors));
          });
        });
    }
    else{
      this._bookService.clearBookItems();
    }
  }
}
