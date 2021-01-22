import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BOOK_ITEMS } from '../book.data';
import { BookItem } from '../models/bookItem.model';

@Injectable()
export class BookService {

  constructor(private _http: HttpClient) { }
  getBookItemDatas() {
    return this._http.get<BookItem[]>(environment.apiBookItemsUrl)
    .subscribe(data => {
      console.log(data);
    });
  }
  setBookItems(bookItems: BookItem[]) {
    console.log(bookItems);
    BOOK_ITEMS.push(...bookItems);
  }
  addBookItem(bookItem: BookItem) {
    this._http.post<BookItem>
      (environment.apiBookItemsUrl, bookItem).subscribe(data => {
        console.log(data);
      });
  }
  clearBookItems() {
    // BOOK_ITEMS.splice(0);
    this._http.delete(environment.apiBookItemsUrl + '?deleteStatus=0')
      .subscribe({
        next: data => {
          console.log('Delete successful');
        },
        error: error => {
          console.log('delete işlem');
          this.handleError(error);
        }
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
