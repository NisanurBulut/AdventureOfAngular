import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanListComponent } from './plan-list/plan-list.component';

@NgModule({
  declarations: [
    PlanListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlanListComponent
  ]
})
export class PlanModule { }
