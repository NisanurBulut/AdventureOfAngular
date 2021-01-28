import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { PlanModel } from "../models";

@Injectable()
export class PlanService {
    constructor(private _http: HttpClient) { }
    addPlan(planItem: PlanModel) {
        return this._http.post(environment.apiPlan, planItem)
            .pipe(delay(500));
    }
    deletePlan(id: number) {
        return this._http.delete(`${environment.apiPlan}/${id}`)
            .pipe(delay(500));
    }
    getPlans() {
        return this._http.get<Array<PlanModel>>(environment.apiPlan)
            .pipe(
                delay(500)
            );
    }
}