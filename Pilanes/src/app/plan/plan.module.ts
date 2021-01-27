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

@NgModule({
  declarations: [
    PlanListComponent,
    PlanItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forRoot({ plans: PlanReducer }),
    EffectsModule.forRoot([PlanEffects])
  ],
  exports: [
    PlanListComponent
  ],
  providers:[PlanService]
})
export class PlanModule { }
