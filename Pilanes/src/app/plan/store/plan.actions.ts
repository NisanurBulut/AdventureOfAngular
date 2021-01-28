import { PlanModel } from '../../models/plan/plan.model';
export enum PlanActionTypes {
    LOAD_PLANS = '[Plan] Load Plan',
    LOAD_PLANS_SUCCESS = '[Plan] Load Plan Success',
    LOAD_PLANS_FAILURE = '[Plan] Load Plan Failure',
    CREATE_PLAN = '[Plan] Create Plan',
    CREATE_PLAN_SUCCESS = '[Plan] Create Plan Success',
    CREATE_PLAN_FAILURE = '[Plan] Create Plan Failure',
    DELETE_PLAN = '[Plan] DELETE Plan',
    DELETE_PLAN_SUCCESS = '[Plan] DELETE Plan Success',
    DELETE_PLAN_FAILURE = '[Plan] DELETE Plan Failure',
}
export class DeletePlanAction {
    readonly type = PlanActionTypes.DELETE_PLAN;
    constructor(public payload: PlanModel) { }
}
export class DeletePlanSuccessAction {
    readonly type = PlanActionTypes.DELETE_PLAN_SUCCESS;
    constructor(public payload: PlanModel) { }
}
export class DeletePlanFailureAction {
    readonly type = PlanActionTypes.DELETE_PLAN_FAILURE;
    constructor(public payload: Error) { }
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
    constructor(public payload: Error) { }
}

export class LoadPlansAction {
    readonly type = PlanActionTypes.LOAD_PLANS;
    constructor() { }
}
export class LoadPlansSuccessAction {
    readonly type = PlanActionTypes.LOAD_PLANS_SUCCESS;
    constructor(public payload: Array<PlanModel>) {
    }
}
export class LoadPlansFailureAction {
    readonly type = PlanActionTypes.LOAD_PLANS_FAILURE;
    constructor(public payload: Error) { }
}
export type PlanActions = LoadPlansAction |
    LoadPlansFailureAction |
    LoadPlansSuccessAction |
    CreatePlanAction |
    CreatePlanFailureAction |
    CreatePlanSuccessAction |
    DeletePlanAction |
    DeletePlanSuccessAction |
    DeletePlanFailureAction;