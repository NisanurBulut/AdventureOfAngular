import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, Subject } from "rxjs";
import { catchError, map, mergeMap, takeUntil } from "rxjs/operators";
import { LoadExercisesFailureAction, LoadExercisesSuccessAction } from "src/app/exercise/store/exercise.actions";
import { PlanService } from "../plan.service";
import { CreatePlanAction, CreatePlanFailureAction, CreatePlanSuccessAction, LoadPlansAction, LoadPlansFailureAction, LoadPlansSuccessAction, PlanActionTypes } from "./plan.actions";

@Injectable()
export class PlanEffects {
  private _unsubscribeAll: Subject<any> = new Subject();
  constructor(private actions$: Actions, private _planService: PlanService) {

  }
  @Effect() addPlan$ = this.actions$
  .pipe(
      ofType<CreatePlanAction>(PlanActionTypes.CREATE_PLAN),
      mergeMap(
          (data) => this._planService.addPlan(data.payload)
              .pipe(
                  map(() => new CreatePlanSuccessAction(data.payload)),
                  catchError((error) => of(new CreatePlanFailureAction(error)))
              )
      )
  );
  @Effect() loadPlanList$ = this.actions$
    .pipe(
      ofType<LoadPlansAction>(PlanActionTypes.LOAD_PLANS),
      mergeMap(
        () => this._planService.getPlans()
          .pipe(
            takeUntil(this._unsubscribeAll),
            map(data => {
              console.log(data);
              return new LoadPlansSuccessAction(data)
            }),
            catchError(error => of(new LoadPlansFailureAction(error)))
          )
      ),
    )
}