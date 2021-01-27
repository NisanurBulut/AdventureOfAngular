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


@NgModule({
  declarations: [
    ExerciseListComponent,
    ExerciseItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forRoot({ piItems: ExerciseReducer }),
  ],
  providers: [ExerciseService],
  exports: [
    ExerciseListComponent
  ]
})
export class ExerciseModule { }
