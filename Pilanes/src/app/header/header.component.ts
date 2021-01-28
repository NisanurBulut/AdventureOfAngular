import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ClearExercisesForPlanAction } from '../exercise/store/exercise.actions';
import { ExerciseItemModel, PlanModel } from '../models';
import { CreatePlanAction } from '../plan/store/plan.actions';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exercisesforPlan: Array<ExerciseItemModel>;
  _unSubscribeAll = new Subject<any>();
  constructor(private store: Store<AppState>, @Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {
  }
  getExercisesForPlan(): void {
    this.store.select(s => s.exerciseList.listForPlan)
      .pipe(
        takeUntil(this._unSubscribeAll)
      ).subscribe((data: ExerciseItemModel[]) => {
        this.exercisesforPlan = data;
      });
  }

  makePlan(): void {
    this.getExercisesForPlan();
    if (Object.entries(this.exercisesforPlan).length > 0) {
      const newPlan = { name: "Plan", exercises: this.exercisesforPlan } as PlanModel;
      this.store.dispatch(new CreatePlanAction(newPlan));
      this.store.dispatch(new ClearExercisesForPlanAction());

    }else{
      alert('Seçili plan bulumuyor');
    }
  }
}
