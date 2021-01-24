import { PiItemAction, PiCalculatorActionTypes } from '../actions/piCaltulator.actions';
import { PiItem } from '../models/pi-item.model';

export interface PiItemsState {
    list: PiItem[];
    loading: boolean;
    error: Error;
}
const initialState: PiItemsState = {
    list: [],
    loading: false,
    error: null
};
export function PiItemReducer(state: PiItemsState = initialState, action: PiItemAction) {
    switch (action.type) {
        case PiCalculatorActionTypes.LOAD_ITEMS:
            return { ...state, loading: true };
        case PiCalculatorActionTypes.LOAD_ITEMS_SUCCESS:
            return { ...state, list: action.payload, loading: false };
        case PiCalculatorActionTypes.LOAD_ITEMS_ERROR:
            return { ...state, error: action.payload, loading: false };
        case PiCalculatorActionTypes.ADD_ITEM:
            return { ...state, loading: true };
        case PiCalculatorActionTypes.ADD_ITEM_SUCCESS:
            return { ...state, list: [...state.list, action.payload], loading: false };
        case PiCalculatorActionTypes.ADD_ITEM_ERROR:
            return { ...state, error: action.payload, loading: false };
        case PiCalculatorActionTypes.DELETE_ITEM:
            return {
                ...state,
                loading: true
            };
        case PiCalculatorActionTypes.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload), loading: false
            };
        case PiCalculatorActionTypes.DELETE_ITEM_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}
