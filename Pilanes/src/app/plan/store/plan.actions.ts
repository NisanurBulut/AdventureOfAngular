import { PlanModel } from '../../models/plan/plan.model';
export enum PlanActionTypes {
    CREATE_PLAN = '[Plan] Create Plan',
    CREATE_PLAN_SUCCESS = '[Plan] Create Plan Success',
    CREATE_PLAN_FAILURE = '[Plan] Create Plan Failure',
}

export class CreatePlanAction {
    readonly type = PlanActionTypes.CREATE_PLAN;
    constructor(public payload: PlanModel) { }
}
export class CreatePlanSuccessAction {
    readonly type = PlanActionTypes.CREATE_PLAN_SUCCESS;
    constructor(public payload: PlanModel) { }
}
export class CreatePlanFailureAction {
    readonly type = PlanActionTypes.CREATE_PLAN_FAILURE;
    constructor(public payload: string) { }
}
export type PlanActions = CreatePlanAction |
    CreatePlanFailureAction |
    CreatePlanSuccessAction;