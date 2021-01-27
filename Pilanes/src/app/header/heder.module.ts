import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ExerciseService } from '../exercise/exercise.service';
import { HeaderComponent } from './header.component';
import { ExerciseEffects } from '../exercise';
import { ExerciseReducer } from '../exercise/store/exercise.reducer';



@NgModule({
  declarations: [
      HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forRoot({ exerciseItems: ExerciseReducer }),
    EffectsModule.forRoot([ExerciseEffects])
  ],
  providers: [ExerciseService],
  exports: [
      HeaderComponent
  ]
})
export class HeaderModule { }
