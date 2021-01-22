import { Profile } from 'src/app/models/profile.model';
import * as ProfileActions from './profile.actions';
export interface State {
    profiles: Profile[];
    editedProfile: Profile;
    editedProfileIndex: number;
}

const initialState: State = {
    profiles: [],
    editedProfile: null,
    editedProfileIndex: -1
};
// buradaki actiona aslında bir interface
export function ProfileListReducer(
    state: State = initialState,
    action: ProfileActions.ProfileListActions) {
    switch (action.type) {
        case ProfileActions.ADD_PROFILE:
            return {
                ...state,
                profiles: [...state.profiles, action.payload]
            };
        default:
            return state;
    }
}