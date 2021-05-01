import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IBookType } from 'src/app/models';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Array<IBookType>=[];
  unSubscribeAll = new Subject<any>();
  constructor(private appService:AppService) {
    this.appService.getBooks()
    .pipe(
      takeUntil(this.unSubscribeAll)
    )
      .subscribe(data => {
         this.books=data;
      });
  }
  ngOnInit(): void {
  }

}
