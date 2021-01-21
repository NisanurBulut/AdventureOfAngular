import { Injectable } from "@angular/core";
import { BookItem } from "../models/bookItem.model";
import { Profile } from '../models/profile.model';

@Injectable()
export class ProfileService {
    private profiles: Profile[] = [];
    constructor() { }
    saveNewProfile(books: string[]) {
        console.log(books);
        const profileName = books.length + ' Profile';
        const profile = new Profile(profileName, books);
        this.profiles.push(profile);
    }
    getProfiles() {
        return this.profiles;
    }
}