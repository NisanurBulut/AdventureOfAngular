import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Image } from './image.model';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    constructor(private _http: HttpClient) { }
    getGallery() {
        return this._http.get<Array<Image>>(environment.apiImage);
    }
    getImage(id: number) {
        return this._http.get(`${environment.apiImage}/${id}`);
    }
}
