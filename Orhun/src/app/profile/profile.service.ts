import { Injectable } from "@angular/core";
import { BookItemComponent } from "../book-list/book-item/book-item.component";
import { BookItem } from "../models/bookItem.model";
import { Profile } from '../models/profile.model';

@Injectable()
export class ProfileService {
    private profiles: Profile[] = [];
    constructor() { }
    saveNewProfile(books: BookItem[]) {
        console.log(books);
        const profileName = books[0].id + ' Profile';
        const bookNames = books.map((element: BookItem) => {
            return element.title;
        }).join(',');
        const profile = new Profile(profileName, bookNames, books);
        this.profiles.push(profile);
    }
    getProfiles() {
        return this.profiles;
    }
    deleteProfile(profile: Profile) {
        const profileIndex = this.profiles.findIndex(a => a.profileName === profile.profileName);
        this.profiles.splice(profileIndex, 1);
    }
}