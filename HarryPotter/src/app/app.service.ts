import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersonType, IHouseType } from './models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: HttpClient) {}
  getCharacters(): Observable<IPersonType[]> {
    return this._http.get<IPersonType[]>(environment.url_characters).pipe();
  }
  getStudents(): Observable<IPersonType[]> {
    return this._http.get<IPersonType[]>(environment.url_students).pipe();
  }
  getStaff(): Observable<IPersonType[]> {
    return this._http.get<IPersonType[]>(environment.url_staff).pipe();
  }
  getHouses(): Observable<IHouseType[]> {
    return this._http.get<IHouseType[]>(environment.url_houses).pipe();
  }
}
