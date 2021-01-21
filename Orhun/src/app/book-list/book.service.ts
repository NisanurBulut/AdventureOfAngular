import { Injectable } from "@angular/core";
import { BOOK_ITEMS } from "../book.data";

@Injectable()
export class BookService{
    getBookItems(){
        return BOOK_ITEMS;
    }
}