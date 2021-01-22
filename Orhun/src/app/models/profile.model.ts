import { BookItem } from './bookItem.model';

export class Profile {
    public id: number;
    constructor(public profileName: string, public bookItem: BookItem) { }
}
