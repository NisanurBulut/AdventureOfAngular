import { ExerciseItemModel } from '../../models/exercise/exercise-item.model';
import { ExerciseActionTypes, ExerciseItemActions } from './exercise.actions';

export interface ExerciseItemsState {
    list: ExerciseItemModel[];
    loading: boolean;
    error: Error;
}
const initialState: ExerciseItemsState = {
    list: [],
    loading: false,
    error: null
};
export function ExerciseReducer(state: ExerciseItemsState = initialState, action: ExerciseItemActions) {
    switch (action.type) {
        case ExerciseActionTypes.LOAD_ITEMS: {
            return { ...state, loading: true };
        }
        case ExerciseActionTypes.LOAD_ITEMS_SUCCESS: {
            return { ...state, list: action.payload, loading: false };
        }
        case ExerciseActionTypes.LOAD_ITEMS_FAILURE: {
            return { ...state, error: action.payload, loading: false };
        }
    }
}