import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ExerciseItemModel } from 'src/app/models';

@Component({
  selector: 'exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.scss']
})
export class ExerciseItemComponent implements OnInit {
  @Input() exerciseItem: ExerciseItemModel;

  constructor() {
  }
  ngOnInit(): void {
  }
  selectExercise(checkState: MatCheckboxChange, item: ExerciseItemModel): void {
    if (checkState.checked) {
      console.log(item);
    }else{
      console.log('unCheck');
    }
  }
}
