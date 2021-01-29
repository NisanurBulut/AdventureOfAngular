import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  selectedTabIndex: number = 0;
  unSubscribeAll = new Subject<any>();
  constructor(private store: Store<fromApp.AppState>) {
    this.store.dispatch(new LoadExercisesAction());
    this.store.select(s => s.header.activeTab)
    .pipe(
      takeUntil(this.unSubscribeAll)
    ).subscribe(data => {
        this.selectedTabIndex = data;
      });
  }
  onTabChanged($event) {
    let clickedIndex = $event.index;
    this.store.dispatch(new SetActiveAction(clickedIndex));
  }
}
