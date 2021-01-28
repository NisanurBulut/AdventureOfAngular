import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlanModel } from 'src/app/models';
import * as fromApp from '../../store/app.reducer';
import { DeletePlanAction, LoadPlanItemAction } from '../store/plan.actions';
@Component({
  selector: 'plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.scss']
})
export class PlanItemComponent implements OnInit {
  @Input() planItem: PlanModel;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }
  deletePlan(item: PlanModel) {
    this.store.dispatch(new DeletePlanAction(item));
  }
  showPlan(item: PlanModel) {
    console.log(this.planItem);
  }
}
