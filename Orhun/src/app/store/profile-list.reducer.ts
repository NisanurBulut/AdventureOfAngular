import { Profile } from '../models/profile.model';
import * as profileListActions from '../store/profile-list.actions';

export interface State {
    profileList: Profile[];
}
const initialState: State = {
    profileList: []
};

// buradaki actiona aslında bir interface
export function profileListReducer(
    state: State = initialState,
    action: profileListActions.ProfileListActions) {

        switch (action.type) {
        case profileListActions.ADD_PROFILE:
            return {
                ...state,
                profileList: [...state.profileList, action.payload]
            };
        case profileListActions.ADD_PROFILES:
            return {
                ...state,
                profileList: [...action.payload]
            };
        case profileListActions.DELETE_PROFILE:
            return {
                ...state,
                profileList: state.profileList.filter((pr, prIndex) => {
                    return pr.id !== action.payload.id;
                })
            };
        default:
            return state;
    }
}
