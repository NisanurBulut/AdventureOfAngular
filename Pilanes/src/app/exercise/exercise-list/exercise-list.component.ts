import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ExerciseItemModel, ExerciseState } from 'src/app/models';
import { LoadExercisesAction } from '../store/exercise.actions';


@Component({
  selector: 'exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
  exerciseItems: Observable<Array<ExerciseItemModel>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  constructor(private store: Store<ExerciseState>) { }

  ngOnInit(): void {
    this.exerciseItems = this.store.select(store => {
      return store.exerciseItems.list;
    });
    this.loading$ = this.store.select(store => store.exerciseItems.loading);
    this.error$ = this.store.select(store => store.exerciseItems.error);
    this.store.dispatch(new LoadExercisesAction());
  }

}
