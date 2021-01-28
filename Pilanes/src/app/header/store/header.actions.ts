
export enum HeaderActionTypes {
    SET_ACTIVE_TAB = '[Header] Set Active Tab',
}
export class SetActiveAction {
    readonly type = HeaderActionTypes.SET_ACTIVE_TAB;
    constructor(public payload: number) { }
}

export type HeaderActions = SetActiveAction ;