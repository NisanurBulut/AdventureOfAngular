import { ActionReducerMap } from '@ngrx/store';
import * as fromExerciseList from '../exercise/store/exercise.reducer';
import * as fromPlanList from '../plan/store/plan.reducer';
import * as fromHeader from '../header/store/header.reducer';
export interface AppState {
    exerciseList: fromExerciseList.ExerciseState;
    planList: fromPlanList.PlanState;
    header:fromHeader.HeaderState;
}

export const appReducer: ActionReducerMap<AppState> = {
    exerciseList: fromExerciseList.ExerciseReducer,
    planList: fromPlanList.PlanReducer,
    header: fromHeader.HeaderReducer
};
