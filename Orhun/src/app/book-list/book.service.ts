import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, retry } from "rxjs/operators";
import { BOOK_ITEMS } from "../book.data";
import { BookItem } from "../models/bookItem.model";

@Injectable()
export class BookService {

  constructor(private _http: HttpClient) { }
  getBookItemDatas() {
    return BOOK_ITEMS;
  }
  setBookItems(bookItems: BookItem[]) {
    console.log(bookItems);
    BOOK_ITEMS.push(...bookItems);
  }
  addBookItem(bookItem: BookItem) {
    BOOK_ITEMS.push(bookItem);
  }
  clearBookItems() {
    BOOK_ITEMS.splice(0);
  }
  getBookItems(bookName: string): Observable<any> {
    return this._http
      .get<Observable<any>>('https://www.googleapis.com/books/v1/volumes?q=' + bookName)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
