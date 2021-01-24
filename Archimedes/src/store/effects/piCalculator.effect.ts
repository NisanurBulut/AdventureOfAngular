import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PiItemsService } from 'src/app/pi-items/pi-items.service';
import { LoadPiItemsAction, LoadPiItemsErrorAction, LoadPiItemsSuccessAction, PiCalculatorActionTypes } from '../actions/piCaltulator.actions';
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
    constructor(private actions$: Actions, private piItemsService: PiItemsService) { }
}
