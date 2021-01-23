import { Profile } from '../models/profile.model';
import * as profileListActions from '../store/profile-list.actions';

export interface State {
    profileList: Profile[];
    editedProfile: Profile;
    editedProfileIndex: number;
}
const initialState: State = {
    profileList: [],
    editedProfile: null,
    editedProfileIndex: -1
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
                bookList: state.profileList.filter((pr, prIndex) => {
                    return prIndex !== state.editedProfileIndex;
                })
            };
        default:
            return state;
    }
}
