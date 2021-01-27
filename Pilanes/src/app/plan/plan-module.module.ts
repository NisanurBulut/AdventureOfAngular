import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanItemComponent } from './plan-item/plan-item.component';
import { MaterialModule } from 'src/shared';

@NgModule({
  declarations: [
    PlanListComponent,
    PlanItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PlanListComponent
  ]
})
export class PlanModule { }
