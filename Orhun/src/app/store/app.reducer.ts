import { ActionReducerMap } from '@ngrx/store';
import * as fromBookList from '../store/book-list.reducer';


export interface AppState {
    bookList: fromBookList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    bookList: fromBookList.bookListReducer
};
