import { ActionReducerMap } from '@ngrx/store';
import * as fromExerciseList from '../exercise/store/exercise.reducer';
import * as fromProfileList from '../plan/store/plan.reducer';

export interface AppState {
    exerciseList: fromExerciseList.ExerciseState;
    planList: fromProfileList.PlanState;
}

export const appReducer: ActionReducerMap<AppState> = {
    exerciseList: fromExerciseList.ExerciseReducer,
    planList: fromProfileList.PlanReducer
};
