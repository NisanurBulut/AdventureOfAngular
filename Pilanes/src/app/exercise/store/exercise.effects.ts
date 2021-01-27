import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, Subject } from "rxjs";
import { catchError, map, mergeMap, takeUntil } from "rxjs/operators";
import { ExerciseService } from "../exercise.service";
import { ExerciseActionTypes, LoadExercisesAction, LoadExercisesFailureAction, LoadExercisesSuccessAction } from "./exercise.actions";

@Injectable()
export class ExerciseEffects {
  private _unsubscribeAll: Subject<any> = new Subject();
  constructor(private actions$: Actions, private _exerciseService: ExerciseService) {

  }
  @Effect() loadShopping$ = this.actions$
    .pipe(
      ofType<LoadExercisesAction>(ExerciseActionTypes.LOAD_ITEMS),
      mergeMap(
        () => this._exerciseService.getExerciseItems()
          .pipe(
            takeUntil(this._unsubscribeAll),
            map(data => {
              console.log(data);
              return new LoadExercisesSuccessAction(data)
            }),
            catchError(error => of(new LoadExercisesFailureAction(error)))
          )
      ),
    )
}