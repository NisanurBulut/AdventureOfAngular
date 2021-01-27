import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared';
import {
  ExerciseListComponent,
  ExerciseItemComponent
} from '../exercise';


@NgModule({
  declarations: [
    ExerciseListComponent,
    ExerciseItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
  ]
})
export class ExerciseModule { }
