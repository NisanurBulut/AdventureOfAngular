import { Action } from '@ngrx/store';
import { BookItem } from '../models/bookItem.model';

export const ADD_BOOKITEM = 'ADD_BOOKITEM';
export const ADD_BOOKLIST = 'ADD_BOOKLIST';
export const DELETE_BOOKLIST = 'DELETE_BOOKLIST';

export class AddBookItem implements Action {
    readonly type = ADD_BOOKITEM;
    constructor(public payload: BookItem) { }
}
export class AddBookList implements Action {
    readonly type = ADD_BOOKLIST;
    constructor(public payload: BookItem[]) {
    }
}
export class DeleteBookList implements Action{
    readonly type = DELETE_BOOKLIST;
}
export type BookListActions =
    AddBookItem |
    AddBookList |
    DeleteBookList;
