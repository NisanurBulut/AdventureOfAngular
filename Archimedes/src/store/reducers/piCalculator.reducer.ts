import { PiItemAction, PiCalculatorActionTypes } from "../actions/piCaltulator.actions";
import { PiItem } from "../models/pi-item.model";

const initialState: Array<PiItem> = [];
export function PiItemReducer(state: Array<PiItem>, action: PiItemAction) {

    switch (action.type) {
        case PiCalculatorActionTypes.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}