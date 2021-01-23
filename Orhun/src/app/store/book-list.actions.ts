import { Action, createAction } from '@ngrx/store';
import { BookItem } from '../models/bookItem.model';

export const listBookList = createAction('[Book-List Component] List');

export const ADD_BOOKITEM = 'ADD_BOOKITEM';
export const ADD_BOOKLIST = 'ADD_BOOKLIST';

export class AddBookItem implements Action {
    readonly type = ADD_BOOKITEM;
    constructor(public payload: BookItem) { }
}
export class AddBookList implements Action {
    readonly type = ADD_BOOKLIST;
    constructor(public payload: BookItem[]) {

    }
}
export type BookListActions =
    AddBookItem |
    AddBookList;
