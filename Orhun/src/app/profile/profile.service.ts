import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookItem } from '../models/bookItem.model';
import { Profile } from '../models/profile.model';

@Injectable()
export class ProfileService {
    private profiles: Profile[] = [];
    constructor(private _http: HttpClient) { }

    saveNewProfile(book: BookItem) {
        const profileName = book.id + ' Profile';
        const profile = new Profile(profileName, book);
        this._http.post<BookItem>
            (environment.apiProfileUrl, profile)
            .subscribe((data: any) => {
                console.log(data);
            });
    }
    getProfiles(): Observable<Profile[]> {
        return this._http.get<Profile[]>(environment.apiProfileUrl);
    }
    getProfile(id: string) {
        return this.profiles.find(a => a.profileName === id);
    }
    deleteProfile(profile: Profile) {
        this._http.delete(environment.apiProfileUrl + '/' + profile.id)
            .subscribe((result) => { console.log(result); });
    }
}