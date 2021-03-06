import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanItemComponent } from './plan-item/plan-item.component';
import { MaterialModule } from 'src/shared';
import { PlanService } from './plan.service';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatProgressBarModule  } from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    PlanListComponent,
    PlanItemComponent,
    PlanDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatCarouselModule.forRoot(),
    MatProgressBarModule
  ],
  exports: [
    PlanListComponent
  ],
  providers:[PlanService]
})
export class PlanModule { }
