import { Component, OnInit } from '@angular/core';
import { BookItem } from 'src/app/models/bookItem.model';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  bookItem: BookItem;
  constructor() {
  }

  ngOnInit(): void {
  }

}
