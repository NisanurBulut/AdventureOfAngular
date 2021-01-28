import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { PlanModel } from 'src/app/models';
import * as fromApp from '../../store/app.reducer';
import { DeletePlanAction, LoadPlanItemAction } from '../store/plan.actions';
import { PlanDetailComponent } from '../plan-detail/plan-detail.component';
@Component({
  selector: 'plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.scss']
})
export class PlanItemComponent implements OnInit {
  @Input() planItem: PlanModel;
  constructor(private store: Store<fromApp.AppState>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  deletePlan(item: PlanModel) {
    this.store.dispatch(new DeletePlanAction(item));
  }
  openPlanDetailPopup(item: PlanModel) {
    this.dialog.open(PlanDetailComponent, {
      disableClose: true,
      panelClass: 'form-dialog',
      data: item
    });
  }
  showPlan(item: PlanModel) {
    this.store.dispatch(new LoadPlanItemAction(item));
    this.openPlanDetailPopup(item);
  }
}
