import { Component, OnInit } from '@angular/core';
import { IBookType } from 'src/app/models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Array<IBookType>=[];
  constructor() { }

  ngOnInit(): void {
  }

}
