import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared';
import {
  ExerciseListComponent,
  ExerciseItemComponent
} from '../exercise';
import { ExerciseService } from './exercise.service';


@NgModule({
  declarations: [
    ExerciseListComponent,
    ExerciseItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [ExerciseService],
  exports: [
    ExerciseListComponent
  ]
})
export class ExerciseModule { }
