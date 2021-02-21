import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './shared/app.reducer';
import * as fromGalleryActionTypes from './store/gallery.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lena';
  constructor(private store: Store<AppState>){
    this.store.dispatch(new fromGalleryActionTypes.LoadGalleryAction());
  }
}
