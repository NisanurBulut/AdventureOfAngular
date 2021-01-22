import { Action } from '@ngrx/store';
import { Profile } from '../../models/profile.model';

export const ADD_PROFILE = 'ADD_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';
export class AddProfile implements Action {
    readonly type = ADD_PROFILE;
    constructor(public payload: Profile) {
    }
}
export class DeleteProfile implements Action {
    readonly type = DELETE_PROFILE;

}
// multiple action olduğu için payload erişimi olabilmesi adına bu tanımlama yapıldı
export type ProfileListActions  = AddProfile | DeleteProfile;
