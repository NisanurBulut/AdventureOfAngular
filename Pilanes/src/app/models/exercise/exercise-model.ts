import { ExerciseItemsState } from '../../exercise/store/exercise.reducer';

export interface ExerciseState {
    readonly exerciseItems: ExerciseItemsState;
}
