import { ExerciseItemModel } from '../../models/exercise/exercise-item.model';
import { ExerciseActionTypes, ExerciseItemActions } from './exercise.actions';

export interface ExerciseItemsState {
    list: ExerciseItemModel[];
    listForPlan:ExerciseItemModel[],
    loading: boolean;
    error: Error;
}
const initialState: ExerciseItemsState = {
    list: [],
    listForPlan:[],
    loading: false,
    error: null
};
export function ExerciseReducer(state: ExerciseItemsState = initialState, action: ExerciseItemActions) {
    switch (action.type) {
        case ExerciseActionTypes.ADD_ITEM_TO_PLAN: {
            return { ...state, listForPlan: action.payload, loading: false };
        }
        case ExerciseActionTypes.REMOVE_ITEM_FROM_PLAN: {
            return { ...state, listForPlan: state.listForPlan.filter(a=>a.id!==action.payload.id), loading: false };
        }
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
