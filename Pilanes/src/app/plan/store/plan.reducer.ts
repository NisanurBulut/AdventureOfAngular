import { act } from "@ngrx/effects";
import { PlanModel } from "src/app/models";
import { PlanActions, PlanActionTypes } from "./plan.actions";

export interface PlanState {
    list: PlanModel[];
    item: PlanModel;
    loading: boolean;
    error: Error;
}
const initialState: PlanState = {
    list: [],
    loading: false,
    item: null,
    error: null
};
export function PlanReducer(state: PlanState = initialState, action: PlanActions) {
    switch (action.type) {
        case PlanActionTypes.LOAD_PLANS: {
            return { ...state, loading: true };
        }
        case PlanActionTypes.LOAD_PLANS_SUCCESS: {
            return { ...state, list: action.payload, loading: false };
        }
        case PlanActionTypes.LOAD_PLANS_FAILURE: {
            return { ...state, error: action.payload, loading: false };
        }
        case PlanActionTypes.LOAD_PLAN: {
            return { ...state, loading: true };
        }
        case PlanActionTypes.LOAD_PLAN_SUCCESS: {
            return { ...state, item: action.payload , loadding: false };
        }
        case PlanActionTypes.LOAD_PLAN_FAILURE: {
            return { ...state, error: action.payload, loading: false };
        }
        case PlanActionTypes.CREATE_PLAN: {
            return { ...state, loading: true };
        }
        case PlanActionTypes.CREATE_PLAN_SUCCESS: {
            return { ...state, list: [...state.list, action.payload], loading: false };
        }
        case PlanActionTypes.CREATE_PLAN_FAILURE: {
            return { ...state, error: action.payload, loading: false };
        }
        case PlanActionTypes.DELETE_PLAN: {
            return { ...state, loading: true };
        }
        case PlanActionTypes.DELETE_PLAN_SUCCESS: {
            return { ...state, list: [...state.list.filter(a => a.id !== action.payload.id)], loading: false };
        }
        case PlanActionTypes.FILTER_PLANS: {
            return {
                ...state,
                list: [...state.list.filter(a => a.name.toLocaleLowerCase().indexOf(action.payload) >= 0)],
                loading: false
            };
        }
        case PlanActionTypes.DELETE_PLAN_FAILURE: {
            return { ...state, error: action.payload, loading: false };
        }
        default:
            return state;
    }

}