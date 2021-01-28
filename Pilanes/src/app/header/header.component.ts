import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ExerciseState } from '../exercise/store/exercise.reducer';
import { ExerciseItemModel } from '../models';
import { PlanState } from '../plan/store/plan.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exerciseItems$: Observable<Array<ExerciseItemModel>>;
  _unSubscribeAll = new Subject<any>();
  constructor(private storeExercises: Store<ExerciseState>, private storePlans: Store<PlanState>) { }
  ngOnInit(): void {
  }
  makePlan(): void {
    this.storeExercises.select(s=>s.list).subscribe(da=>console.log(da));
    const result = this.storeExercises
      .select(store => store.listForPlan)
      .pipe(
        takeUntil(this._unSubscribeAll)
      )
      .subscribe((sData: any) => {
        console.log(sData);
      });
    console.log(result);
  }
}
