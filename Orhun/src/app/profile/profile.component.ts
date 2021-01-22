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
export class ProfileComponent implements OnInit, OnChanges {

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
        this.profiles = data;
      });
  }

  onDeleteProfile(event: Event, profile: Profile) {
    event.stopPropagation();
    this._profileService.deleteProfile(profile).subscribe(data => {
      this.getProfileList();
    });
  }
  onLoadProfile(profile: Profile) {
    console.log(profile.bookItem);
    window.open(profile.bookItem.infoLink, '_blank');
  }
}
