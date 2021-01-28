import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExerciseItemModel } from 'src/app/models';
import { LoadExercisesAction } from '../store/exercise.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
  exerciseItems: Observable<Array<ExerciseItemModel>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  constructor(private store: Store<fromApp.AppState>) {

  }
  ngOnInit(): void {
    this.store.dispatch(new LoadExercisesAction());
    this.exerciseItems = this.store.select(store => store.exerciseList.list);
    this.loading$ = this.store.select(store => store.exerciseList.loading);
    this.error$ = this.store.select(store => store.exerciseList.error);
  }

}
