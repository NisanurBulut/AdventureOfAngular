import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared';
import {
  ExerciseListComponent,
  ExerciseItemComponent
} from '.';
import { ExerciseService } from './exercise.service';
import { StoreModule } from '@ngrx/store';
import { ExerciseReducer } from './store/exercise.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExerciseEffects } from './store/exercise.effects';


@NgModule({
  declarations: [
    ExerciseListComponent,
    ExerciseItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forRoot({ exerciseItems: ExerciseReducer }),
    EffectsModule.forRoot([ExerciseEffects])
  ],
  providers: [ExerciseService],
  exports: [
    ExerciseListComponent,
    ExerciseItemComponent
  ]
})
export class ExerciseModule { }
