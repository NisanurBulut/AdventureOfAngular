import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExerciseItemsState } from '../exercise/store/exercise.reducer';
import { ExerciseItemModel } from '../models';
import { PlanState } from '../plan/store/plan.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exerciseItems: Observable<Array<ExerciseItemModel>>;
  constructor(private storeExercises:Store<ExerciseItemsState>, private storePlans:Store<PlanState>) { }
  ngOnInit(): void {
    this.exerciseItems = this.storeExercises.select(store => store.listForPlan);
    console.log(this.exerciseItems)

  }
  makePlan():void{

  }
}
