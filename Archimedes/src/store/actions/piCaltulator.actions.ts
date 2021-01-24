import { Action } from '@ngrx/store';
import { PiItem } from '../models/pi-item.model';

export enum PiCalculatorActionTypes {
    ADD_ITEM = '[PiCalculator] Add Item',
    DELETE_ITEM = '[PiCalculator] Delete Item'
}
export class AddItemAction implements Action {
    readonly type: string = PiCalculatorActionTypes.ADD_ITEM;
    constructor(public payload: PiItem) { }
}
export class DeleteItemAction implements Action {
    readonly type:string=PiCalculatorActionTypes.DELETE_ITEM;
    constructor(public payload:PiItem){}
}

export type PiItemAction = AddItemAction | DeleteItemAction;