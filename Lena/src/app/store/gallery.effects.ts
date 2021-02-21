import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { GalleryService } from "../shared/gallery.service";
import * as fromGalleryActionTypes from './gallery.actions';
@Injectable()
export class GalleryEffect {
    loadPiItems$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType<fromGalleryActionTypes.LoadGalleryAction>(fromGalleryActionTypes.GaleryActionTypes.LOAD_GALLERY),
                mergeMap(
                    () => this.galleryService.getGallery()
                        .pipe(
                            map(data => new fromGalleryActionTypes.LoadGallerySuccessAction(data)),
                            catchError((error) => of(new fromGalleryActionTypes.LoadGalleryErrorAction(error)))
                        )
                )
            );
    });

    deletePiItem$ = createEffect(() => {
        return this.actions$
            .pipe(
                tap(data => console.log(data)),
                ofType<fromGalleryActionTypes.LoadImageAction>(fromGalleryActionTypes.GaleryActionTypes.LOAD_IMAGE),
                mergeMap(
                    (data) => this.galleryService.getImage(data.payload)
                        .pipe(
                            map(() => new fromGalleryActionTypes.LoadImageSuccessAction(data.payload)),
                            catchError((error) => of(new fromGalleryActionTypes.LoadImageErrorAction(error)))
                        )
                )
            );
    })
    constructor(private actions$: Actions, private galleryService: GalleryService) { }
}