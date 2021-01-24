import { Action } from '@ngrx/store';
import { PiItem } from '../models/pi-item.model';


export enum PiCalculatorActionTypes {
    ADD_ITEM = '[PiCalculator] Add Item'
}
export class AddItemAction implements Action {
    readonly type: string = PiCalculatorActionTypes.ADD_ITEM;
    constructor(private piItem: PiItem) { }
}

export type PiItemAction = AddItemAction;