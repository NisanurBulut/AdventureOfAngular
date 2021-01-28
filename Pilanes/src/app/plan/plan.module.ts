import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanItemComponent } from './plan-item/plan-item.component';
import { MaterialModule } from 'src/shared';
import { PlanService } from './plan.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PlanReducer } from './store/plan.reducer';
import { PlanEffects } from './store/plan.effects';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';

@NgModule({
  declarations: [
    PlanListComponent,
    PlanItemComponent,
    PlanDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PlanListComponent
  ],
  providers:[PlanService]
})
export class PlanModule { }
