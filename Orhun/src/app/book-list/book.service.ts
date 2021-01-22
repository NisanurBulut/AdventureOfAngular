import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, delay, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BOOK_ITEMS } from '../book.data';
import { BookItem } from '../models/bookItem.model';

@Injectable()
export class BookService {

  constructor(private _http: HttpClient) { }
  getBookItemDatas(): Observable<BookItem[]> {
    return this._http.get<BookItem[]>(environment.apiBookItemsUrl).pipe(
    );
  }
  setBookItems(bookItems: BookItem[]) {
    bookItems.forEach((bookItem: BookItem) => {
     this.addBookItem(bookItem);
    });
  }
  addBookItem(bookItem: BookItem) {
    this._http.post<BookItem>
      (environment.apiBookItemsUrl, bookItem)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  clearBookItems() {

  }
  deleteBookItems(bookItems: BookItem[]) {
    bookItems.forEach((bookItem: BookItem) => {
      console.log(bookItem.id, environment.apiBookItemsUrl + '/' + bookItem.id);
      this._http.delete(environment.apiBookItemsUrl + '/' + bookItem.id)
      .subscribe((result) => { console.log(result)});
    });
  }
  getBookItems(bookName: string): Observable<any> {
    return this._http
      .get<Observable<any>>(environment.apiLibraryUrl + bookName)
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
