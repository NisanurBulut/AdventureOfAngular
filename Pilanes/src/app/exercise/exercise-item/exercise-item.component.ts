import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { ExerciseItemModel } from 'src/app/models';
import { AddExerciseToPlanAction, RemoveExerciseFromPlanAction } from '../store/exercise.actions';
import { ExerciseItemsState } from '../store/exercise.reducer';

@Component({
  selector: 'exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.scss']
})
export class ExerciseItemComponent implements OnInit {
  @Input() exerciseItem: ExerciseItemModel;

  constructor(private store: Store<ExerciseItemsState>) {
  }
  ngOnInit(): void {
  }
  selectExercise(checkState: MatCheckboxChange, item: ExerciseItemModel): void {
    if (checkState.checked) {
      this.store.dispatch(new AddExerciseToPlanAction(item));
    } else {
      this.store.dispatch(new RemoveExerciseFromPlanAction(item));
    }
  }
}
