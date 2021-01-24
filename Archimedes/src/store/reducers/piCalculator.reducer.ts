import { PiItemAction } from "../actions/piCaltulator.actions";
import { PiItem } from "../models/pi-item.model";

const initialState: Array<PiItem> = [];
export function PiItemReducer(state: Array<PiItem>, actions: PiItemAction) {

    switch(actions.type){
        default:
            return state;
    }
 }