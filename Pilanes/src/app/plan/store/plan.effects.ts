import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, Subject } from "rxjs";
import { catchError, map, mergeMap, takeUntil } from "rxjs/operators";
import { PlanService } from "../plan.service";
import { CreatePlanAction, CreatePlanFailureAction, CreatePlanSuccessAction, PlanActionTypes } from "./plan.actions";

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

}