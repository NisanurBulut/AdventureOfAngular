import { Action } from '@ngrx/store';
import { PiItem } from '../models/pi-item.model';

export enum PiCalculatorActionTypes {
    LOAD_ITEMS = '[PiCalculator] Load Pi Items',
    LOAD_ITEMS_SUCCESS = '[PiCalculator] Load Pi Items Success',
    LOAD_ITEMS_ERROR = '[PiCalculator] Load Pi Items Error',
    ADD_ITEM = '[PiCalculator] Add Item',
    ADD_ITEM_SUCCESS = '[PiCalculator] Add Item Success',
    ADD_ITEM_ERROR = '[PiCalculator] Add Item Error',
    DELETE_ITEM = '[PiCalculator] Delete Item',
    DELETE_ITEM_SUCCESS = '[PiCalculator] Delete Item Success',
    DELETE_ITEM_ERROR = '[PiCalculator] Delete Item Error'
}

export class LoadPiItemsAction implements Action {
    readonly type = PiCalculatorActionTypes.LOAD_ITEMS;
}
export class LoadPiItemsSuccessAction implements Action {
    readonly type = PiCalculatorActionTypes.LOAD_ITEMS_SUCCESS;
    constructor(public payload: Array<PiItem>) { }
}
export class LoadPiItemsErrorAction implements Action {
    readonly type = PiCalculatorActionTypes.LOAD_ITEMS_ERROR;
    constructor(public payload: Error) { }
}
export class AddItemAction implements Action {
    readonly type: string = PiCalculatorActionTypes.ADD_ITEM;
    constructor(public payload: PiItem) {
        console.log(payload);
     }
}
export class AddItemSuccessAction implements Action {
    readonly type: string = PiCalculatorActionTypes.ADD_ITEM_SUCCESS;
    constructor(public payload: PiItem) { }
}
export class AddItemErrorAction implements Action {
    readonly type: string = PiCalculatorActionTypes.ADD_ITEM_ERROR;
    constructor(public payload: string) { }
}
export class DeleteItemAction implements Action {
    readonly type: string = PiCalculatorActionTypes.DELETE_ITEM;
    constructor(public payload: string) { }
}
export class DeleteItemSuccessAction implements Action {
    readonly type: string = PiCalculatorActionTypes.DELETE_ITEM_SUCCESS;
    constructor(public payload: string) { }
}
export class DeleteItemErrorAction implements Action {
    readonly type: string = PiCalculatorActionTypes.DELETE_ITEM_ERROR;
    constructor(public payload: string) { }
}

export type PiItemAction = AddItemAction
    | AddItemSuccessAction
    | AddItemErrorAction
    | DeleteItemAction
    | DeleteItemSuccessAction
    | LoadPiItemsAction
    | LoadPiItemsErrorAction
    | LoadPiItemsSuccessAction;
