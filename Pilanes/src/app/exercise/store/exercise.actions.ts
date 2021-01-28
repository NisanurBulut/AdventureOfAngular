import { ExerciseItemModel } from '../../models';
export enum ExerciseActionTypes {
    LOAD_ITEMS = '[Exercise] Load Exercise Items',
    LOAD_ITEMS_SUCCESS = '[Exercise] Load Exercise Items Success',
    LOAD_ITEMS_FAILURE = '[Exercise] Load Exercise Items Failure',
    ADD_ITEM_TO_PLAN = '[Exercise] Add Item To Plan',
    REMOVE_ITEM_FROM_PLAN = '[Exercise] Remove Item from Plan'
}
export class AddExerciseToPlanAction {
    readonly type = ExerciseActionTypes.ADD_ITEM_TO_PLAN;
    constructor(public payload: ExerciseItemModel) { }
}
export class RemoveExerciseFromPlanAction {
    readonly type = ExerciseActionTypes.REMOVE_ITEM_FROM_PLAN;
    constructor(public payload: ExerciseItemModel) { }
}
export class LoadExercisesAction {
    readonly type = ExerciseActionTypes.LOAD_ITEMS;
    constructor() { }
}
export class LoadExercisesSuccessAction {
    readonly type = ExerciseActionTypes.LOAD_ITEMS_SUCCESS;
    constructor(public payload: Array<ExerciseItemModel>) {
    }
}
export class LoadExercisesFailureAction {
    readonly type = ExerciseActionTypes.LOAD_ITEMS_FAILURE;
    constructor(public payload: Error) { }
}

export type ExerciseItemActions = LoadExercisesAction |
    LoadExercisesFailureAction |
    LoadExercisesSuccessAction |
    AddExerciseToPlanAction |
    RemoveExerciseFromPlanAction;
