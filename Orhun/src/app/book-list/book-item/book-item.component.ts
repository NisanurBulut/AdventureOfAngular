import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookItem } from 'src/app/models/bookItem.model';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input('item') bookItem: BookItem;
  @Output() setProfileBookItems: EventEmitter<BookItem> = new EventEmitter();
  constructor(private _profileService: ProfileService) {
  }
  addToProfile(bookItem: BookItem) {
    this._profileService.saveNewProfile(bookItem)
      .subscribe(data => {
        this.setProfileBookItems.emit(bookItem);
      });
  }
  ngOnInit(): void {
  }
}
