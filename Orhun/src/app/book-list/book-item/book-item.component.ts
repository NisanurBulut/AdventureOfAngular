import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookItem } from 'src/app/models/bookItem.model';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/profile/profile.service';
import * as profileListActions from '../../store/profile-list.actions';
@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input('item') bookItem: BookItem;

  constructor(private _profileService: ProfileService, private store: Store<{ profileList: Profile }>) {
  }
  addToProfile(bookItem: BookItem) {
    this._profileService.checkProfileExistence(bookItem)
      .subscribe(data => {
        console.log(Object.entries(data).length);
        if (Object.entries(data).length === 0) {
          this.saveProfile(bookItem);
        }else{
          alert('This profile is already attached');
        }
      });
  }
  saveProfile(newProfile: BookItem) {
    this._profileService.saveNewProfile(newProfile)
      .subscribe(data => {
        this.store.dispatch(
          new profileListActions.AddProfile(data));
      });
  }
  ngOnInit(): void {
  }
}
