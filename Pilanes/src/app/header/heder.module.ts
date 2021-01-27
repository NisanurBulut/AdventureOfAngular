import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared';

import { StoreModule } from '@ngrx/store';
import { ExerciseService } from '../exercise/exercise.service';
import { HeaderComponent } from './header.component';
import { ExerciseReducer } from '../exercise/store/exercise.reducer';
import { PlanReducer } from '../plan/store/plan.reducer';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [ExerciseService],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
