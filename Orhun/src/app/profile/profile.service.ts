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

    checkProfileExistence(book: BookItem): Observable<Profile> {
        return this._http.get<Profile>(environment.apiProfileUrl + '?profileName=' + book.id);
    }
    saveNewProfile(book: BookItem): Observable<Profile> {
        const profileName = book.id;
        const profile = new Profile(profileName, book);
        return this._http.post<Profile>
            (environment.apiProfileUrl, profile);
    }
    getProfiles(): Observable<Profile[]> {
        return this._http.get<Profile[]>(environment.apiProfileUrl);
    }
    getProfile(id: string) {
        return this.profiles.find(a => a.profileName === id);
    }
    deleteProfile(profile: Profile): Observable<any> {
        return this._http.delete(environment.apiProfileUrl + '/' + profile.id);
    }
}