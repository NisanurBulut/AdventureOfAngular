import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExerciseItemsState } from '../exercise/store/exercise.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store:Store<ExerciseItemsState>) { }
  ngOnInit(): void {
  }
  makePlan():void{

  }
}
