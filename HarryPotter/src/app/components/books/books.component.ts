import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IBookType } from 'src/app/models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Array<IBookType>=[];
  constructor(private appService:AppService) {
    this.appService.getBooks()
      .subscribe(data => {
         this.books=data;
      });
  }
  ngOnInit(): void {
  }

}
