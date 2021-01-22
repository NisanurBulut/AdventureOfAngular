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
    this.getProfileList();
  }
  getProfileList() {
    console.log(this.profiles,'silme');
    this._profileService.getProfiles()
      .subscribe(data => {
        console.log(data);
        this.profiles = data;
      });
  }
  onSaveProfile() {

  }
  onDeleteProfile(event: Event, profile: Profile) {
    event.stopPropagation();
    this._profileService.deleteProfile(profile).subscribe(data => {
      this.getProfileList();
    });
  }
  onLoadProfile(profile: Profile) {
    // const pBookItems = this._profileService.getProfile(profile.profileName);
    // console.log(pBookItems.bookItems);
    // this._bookService.clearBookItems();
    // this._bookService.setBookItems(profile.bookItems);
  }
}
