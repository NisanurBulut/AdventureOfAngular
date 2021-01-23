import { ActionReducerMap } from '@ngrx/store';
import * as fromBookList from '../store/book-list.reducer';
import * as fromProfileList from '../store/profile-list.reducer';

export interface AppState {
    bookList: fromBookList.State;
    profileList: fromProfileList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    bookList: fromBookList.bookListReducer,
    profileList: fromProfileList.profileListReducer
};
