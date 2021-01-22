import { ActionReducerMap } from '@ngrx/store';
import * as fromProfileList from '../profile/store/profile.reducer';

export interface AppState {
    profileList: fromProfileList.State;
}
export const appReducer: ActionReducerMap<AppState> = {
    profileList: fromProfileList.ProfileListReducer
};