import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { PiItemsService } from 'src/app/pi-items/pi-items.service';
import {
    AddItemAction, AddItemErrorAction, AddItemSuccessAction,
    DeleteItemAction,
    DeleteItemErrorAction,
    DeleteItemSuccessAction,
    LoadPiItemsAction, LoadPiItemsErrorAction, LoadPiItemsSuccessAction, PiCalculatorActionTypes
} from '../actions/piCaltulator.actions';
@Injectable()
export class PiCalculatorEffect {
    @Effect() loadPiItems$ = this.actions$
        .pipe(
            ofType<LoadPiItemsAction>(PiCalculatorActionTypes.LOAD_ITEMS),
            mergeMap(
                () => this.piItemsService.getPiItems()
                    .pipe(
                        map(data => new LoadPiItemsSuccessAction(data)),
                        catchError((error) => of(new LoadPiItemsErrorAction(error)))
                    )
            )
        );
    @Effect() addPiItem$ = this.actions$
        .pipe(
            ofType<AddItemAction>(PiCalculatorActionTypes.ADD_ITEM),
            mergeMap(
                (data) => this.piItemsService.addPiItem(data.payload)
                    .pipe(
                        map(() => new AddItemSuccessAction(data.payload)),
                        catchError((error) => of(new AddItemErrorAction(error)))
                    )
            )
        );
    @Effect() deletePiItem$ = this.actions$
        .pipe(
            tap(data => console.log(data)),
            ofType<DeleteItemAction>(PiCalculatorActionTypes.DELETE_ITEM),
            mergeMap(
                (data) => this.piItemsService.deletePiItem(data.payload)
                    .pipe(
                        map(() => new DeleteItemSuccessAction(data.payload)),
                        catchError((error) => of(new DeleteItemErrorAction(error)))
                    )
            )
        );
    constructor(private actions$: Actions, private piItemsService: PiItemsService) { }
}
