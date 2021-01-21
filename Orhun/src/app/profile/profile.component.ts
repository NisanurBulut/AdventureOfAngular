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
  getProfileList(){
    this.profiles = this._profileService.getProfiles();
  }
  onSaveProfile() {
    const books = this._bookService.getBookItemDatas()
      .map((element: BookItem) => {
        return element.title;
      });
      this._profileService.saveNewProfile(books);
      this.getProfileList();
  }
  onDeleteProfile(event, profile: Profile) { }
}
