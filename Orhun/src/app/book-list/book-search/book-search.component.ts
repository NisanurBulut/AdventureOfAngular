import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  providers: [BookService]
})
export class BookSearchComponent implements OnInit {

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
  }
  onSubmit(value: any) {
    console.log(value);
    var result = this._bookService.getBookItems(value.bookName)
      .subscribe(result => {
        console.log(result);
      });
  }
}
