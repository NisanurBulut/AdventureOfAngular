import { Action } from '@ngrx/store';
import { Image } from '../shared/image.model';
export enum GaleryActionTypes {
    LOAD_GALLERY = '[Galery] Load Galery',
    LOAD_GALLERY_SUCCESS = '[Galery] Load Galery Success',
    LOAD_GALLERY_ERROR = '[Galery] Load Galery Error',
    LOAD_IMAGE = '[Galery] Load IMAGE',
    LOAD_IMAGE_SUCCESS = '[Galery] Load IMAGE Success',
    LOAD_IMAGE_ERROR = '[Galery] Load IMAGE Error',
}
export class LoadGalleryAction implements Action {
    readonly type = GaleryActionTypes.LOAD_GALLERY;
}
export class LoadGallerySuccessAction implements Action {
    readonly type = GaleryActionTypes.LOAD_GALLERY_SUCCESS;
    constructor(public payload: Array<Image>) { }
}
export class LoadGalleryErrorAction implements Action {
    readonly type = GaleryActionTypes.LOAD_GALLERY_ERROR;
    constructor(public payload: Error) { }
}
export class LoadImageAction implements Action {
    readonly type: string = GaleryActionTypes.LOAD_IMAGE;
    constructor(public payload: string) { }
}
export class LoadImageSuccessAction implements Action {
    readonly type: string = GaleryActionTypes.LOAD_IMAGE_SUCCESS;
    constructor(public payload: string) { }
}
export class LoadImageErrorAction implements Action {
    readonly type: string = GaleryActionTypes.LOAD_IMAGE_ERROR;
    constructor(public payload: number) { }
}
export type GalleryActionTypes= LoadGalleryAction |
LoadGalleryErrorAction|
LoadGallerySuccessAction|
LoadImageAction|
LoadImageErrorAction|
LoadImageSuccessAction;
