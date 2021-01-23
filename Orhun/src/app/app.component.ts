import { Component } from '@angular/core';
import { ProfileService } from './profile/profile.service';
import * as fromApp from '../app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as profileListActions from './store/profile-list.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Orhun';
  constructor(private _profileService: ProfileService, private _store: Store<fromApp.AppState>) {
    this._profileService.getProfiles()
      .subscribe(data => {
         this._store.dispatch(new profileListActions.AddProfiles(data));
      });
  }
}
