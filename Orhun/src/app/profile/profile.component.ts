import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../book-list/book.service';
import { Profile } from '../models/profile.model';
import { ProfileService } from './profile.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import * as profileListActions from '../store/profile-list.actions';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService, BookService]
})
export class ProfileComponent implements OnInit {
  profileList: Observable<{ profileList: Profile[] }>;
  profiles: Profile[] = [];

  constructor(private _profileService: ProfileService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.getProfiles();
  }
  getProfiles(){
    this.profileList = this.store.select('profileList');
  }
  onDeleteProfile(event: Event, profile: Profile) {
    event.stopPropagation();
    this._profileService.deleteProfile(profile)
    .subscribe(data => {
      this.store.dispatch(new profileListActions.DeleteProfile(profile));
    });
  }
  onLoadProfile(profile: Profile) {
    console.log(profile.bookItem);
    window.open(profile.bookItem.infoLink, '_blank');
  }
}
