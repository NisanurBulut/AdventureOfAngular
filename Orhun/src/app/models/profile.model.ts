import { BookItem } from './bookItem.model';

export class Profile {
    constructor(public profileName: string, public bookNames: string, public bookItems: BookItem[]) { }
}
