import { PiItemAction, PiCalculatorActionTypes } from "../actions/piCaltulator.actions";
import { PiItem } from "../models/pi-item.model";

const initialState: Array<PiItem> = [];
export function PiItemReducer(state: Array<PiItem> = initialState, action: PiItemAction) {
    switch (action.type) {
        case PiCalculatorActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case PiCalculatorActionTypes.DELETE_ITEM:
            return state.filter(a => a.id != action.payload.id);
        default:
            return state;
    }
}