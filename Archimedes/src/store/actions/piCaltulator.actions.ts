import { Action } from '@ngrx/store';
import { PiItem } from '../models/pi-item.model';

export enum PiCalculatorActionTypes {
    ADD_ITEM = '[PiCalculator] Add Item'
}
export class AddItemAction implements Action {
    readonly type: string = PiCalculatorActionTypes.ADD_ITEM;
    constructor(public payload: PiItem) { }
}

export type PiItemAction = AddItemAction;