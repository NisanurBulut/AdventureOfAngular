import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadExercisesAction } from './exercise/store/exercise.actions';
import { SetActiveAction } from './header/store/header.actions';
import * as fromApp from './store/app.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pilanes';
  constructor(private store: Store<fromApp.AppState>) {
    this.store.dispatch(new LoadExercisesAction());
  }
  onTabChanged($event) {
    let clickedIndex = $event.index;
    this.store.dispatch(new SetActiveAction(clickedIndex))
  }
}
