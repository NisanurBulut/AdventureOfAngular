import { BookItem } from '../models/bookItem.model';
import * as bookListActions from './book-list.actions';

export interface State {
    bookList: BookItem[];
}
const initialState: State = {
    bookList: []
};

// buradaki actiona aslında bir interface
export function bookListReducer(
    state: State = initialState,
    action: bookListActions.BookListActions) {
    switch (action.type) {
        case bookListActions.ADD_BOOKITEM:
            return {
                ...state,
                bookList: [...state.bookList, action.payload]
            };
        case bookListActions.DELETE_BOOKLIST:
        return {
            ...state,
            bookList: []
        };
        case bookListActions.ADD_BOOKLIST:
            return {
                ...state,
                bookList: [...state.bookList, ...action.payload]
            };
        default:
            return state;
    }
}
