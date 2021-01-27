import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ExerciseItemModel } from 'src/app/models';

@Component({
  selector: 'exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.scss']
})
export class ExerciseItemComponent implements OnInit {
  @Input() exerciseItem : ExerciseItemModel;

  constructor() {
  }
  ngOnInit(): void {
  }

}
