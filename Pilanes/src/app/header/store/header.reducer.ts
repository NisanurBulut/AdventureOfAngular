import { HeaderActions, HeaderActionTypes } from "./header.actions";

export interface HeaderState {
    activeTab:number
}
const initialState: HeaderState = {
    activeTab:0
};
export function HeaderReducer(state: HeaderState = initialState, action: HeaderActions) {
    switch (action.type) {
        case HeaderActionTypes.SET_ACTIVE_TAB: {
            return { ...state, activeTab:action.payload };
        }
        default:
            return state;
    }

}