import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExerciseState } from 'src/app/models';


@Component({
  selector: 'exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  constructor(private store: Store<ExerciseState>) { }

  ngOnInit(): void {
  }

}
