import { Action } from '@ngrx/store';
import { Profile } from '../models/profile.model';

export const LOAD_PROFILES = 'LOAD_PROFILES';
export const ADD_PROFILE = 'ADD_PROFILE';
export const ADD_PROFILES = 'ADD_PROFILES';
export const DELETE_PROFILE = 'DELETE_PROFILE';

export class AddProfiles implements Action {
    readonly type = ADD_PROFILES;
    constructor(public payload: Profile[]) { }
}
export class AddProfile implements Action {
    readonly type = ADD_PROFILE;
    constructor(public payload: Profile) { }
}
export class DeleteProfile implements Action {
    readonly type = DELETE_PROFILE;
    constructor(public payload: Profile) {
    }
}
export type ProfileListActions =
    DeleteProfile |
    AddProfile | AddProfiles;
