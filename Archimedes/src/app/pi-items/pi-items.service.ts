import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { PiItem } from 'src/store/models/pi-item.model';
@Injectable()
export class PiItemsService {
    constructor(private _http: HttpClient) { }
    getPiItems() {
        return this._http.get<Array<PiItem>>(environment.apiPiItem)
            .pipe(
                delay(500)
            );
    }
    addPiItem(piItem: PiItem) {
        console.log(piItem);
        return this._http.post(environment.apiPiItem, piItem)
            .pipe(delay(500));
    }
    deletePiItem(id: string) {
        return this._http.delete(`${environment.apiPiItem}/${id}`)
            .pipe(delay(500));
    }
}
