import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-list/book.service';
import { BookItem } from '../models/bookItem.model';
import { Profile } from '../models/profile.model';
import { ProfileService } from './profile.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService, BookService]
})
export class ProfileComponent implements OnInit {

  profiles: Profile[] = [];
  constructor(private _profileService: ProfileService, private _bookService: BookService) { }

  ngOnInit(): void {

  }
  getProfileList() {
    this.profiles = this._profileService.getProfiles();
  }
  onSaveProfile() {
    const books = this._bookService.getBookItemDatas();
    this._profileService.saveNewProfile(books);
    this.getProfileList();
  }
  onDeleteProfile(event:Event, profile: Profile) {
    event.stopPropagation();
    this._profileService.deleteProfile(profile);
   }
  onLoadProfile(profile: Profile) {
    this._bookService.clearBookItems();
    this._bookService.setBookItems(profile.bookItems);
  }
}
