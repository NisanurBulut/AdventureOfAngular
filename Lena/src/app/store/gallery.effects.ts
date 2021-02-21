import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { GalleryService } from '../shared/gallery.service';
import * as fromGalleryActionTypes from './gallery.actions';
import { LoadImageAction, LoadImageSuccessAction, LoadImageErrorAction, GalleryActionTypes } from './gallery.actions';
@Injectable()
export class GalleryEffect {
    @Effect()
    loadGallery$ = this.actions$
        .pipe(
            ofType<fromGalleryActionTypes.LoadGalleryAction>(fromGalleryActionTypes.GalleryActionTypes.LOAD_GALLERY),
            mergeMap(
                () => this.galleryService.getGallery()
                    .pipe(
                        map(data => new fromGalleryActionTypes.LoadGallerySuccessAction(data)),
                        catchError((error) => of(new fromGalleryActionTypes.LoadGalleryErrorAction(error)))
                    )
            )
        );


    @Effect() loadImage$ = this.actions$
        .pipe(
            ofType<LoadImageAction>(GalleryActionTypes.LOAD_IMAGE),
            mergeMap(
                (data) => this.galleryService.getImage(data.payload)
                    .pipe(
                        map(() => new LoadImageSuccessAction(data.payload)),
                        catchError((error) => of(new LoadImageErrorAction(error)))
                    )
            )
        );
    constructor(private actions$: Actions, private galleryService: GalleryService) { }
}
