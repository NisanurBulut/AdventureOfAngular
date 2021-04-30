import { Component, Input, OnInit } from '@angular/core';
import { IBookType } from 'src/app/models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input('item') bookItem!: IBookType;
  constructor() { }

  ngOnInit(): void {
  }

}
