import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BookService } from '../book-list/book.service';
import { Profile } from '../models/profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService, BookService]
})
export class ProfileComponent implements OnInit , OnChanges{

  profiles: Profile[] = [];
  @Input() profileNewItem: Profile;
  constructor(private _profileService: ProfileService, private cd: ChangeDetectorRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getProfileList();
    this.cd.markForCheck();
  }

  ngOnInit(): void {
    this.getProfileList();
  }
  getProfileList() {
    this.cd.detectChanges();
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
