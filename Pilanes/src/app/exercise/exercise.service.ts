import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ExerciseItemModel } from '../models';
import { delay } from 'rxjs/operators';
@Injectable()
export class ExerciseService {
    constructor(private _http: HttpClient) { }
    getExerciseItems() {
        return this._http.get<Array<ExerciseItemModel>>(environment.apiExercise)
            .pipe(
                delay(500)
            );
    }
}
