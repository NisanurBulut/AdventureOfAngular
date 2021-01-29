import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';
import { PlanModule } from '../plan.module';
import { LoadPlansAction } from '../store/plan.actions';
@Component({
  selector: 'plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {
  plans$: Observable<Array<PlanModule>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  unSubscribeAll = new Subject<any>();
  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(new LoadPlansAction());


    this.store.select(s => s.header.activeTab)
      .pipe(
        takeUntil(this.unSubscribeAll)
      ).subscribe(data => {
        this.plans$ = this.store.select(store => store.planList.list);
        this.loading$ = this.store.select(store => store.planList.loading);
        this.error$ = this.store.select(store => store.planList.error);
      });
  }

}
