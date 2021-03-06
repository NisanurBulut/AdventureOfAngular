import { Action } from '@ngrx/store';
import { Image } from '../shared/image.model';
export enum GalleryActionTypes {
    LOAD_GALLERY = '[Galery] Load Galery',
    LOAD_GALLERY_SUCCESS = '[Galery] Load Galery Success',
    LOAD_GALLERY_ERROR = '[Galery] Load Galery Error',
    LOAD_IMAGE = '[Galery] Load IMAGE',
    LOAD_IMAGE_SUCCESS = '[Galery] Load IMAGE Success',
    LOAD_IMAGE_ERROR = '[Galery] Load IMAGE Error',
}
export class LoadGalleryAction implements Action {
    readonly type = GalleryActionTypes.LOAD_GALLERY;
    constructor() { }
}
export class LoadGallerySuccessAction implements Action {
    readonly type = GalleryActionTypes.LOAD_GALLERY_SUCCESS;
    constructor(public payload: Array<Image>) { }
}
export class LoadGalleryErrorAction implements Action {
    readonly type = GalleryActionTypes.LOAD_GALLERY_ERROR;
    constructor(public payload: Error) { }
}
export class LoadImageAction implements Action {
    readonly type = GalleryActionTypes.LOAD_IMAGE;
    constructor(public payload: number) { }
}
export class LoadImageSuccessAction implements Action {
    readonly type = GalleryActionTypes.LOAD_IMAGE_SUCCESS;
    constructor(public payload: number) { }
}
export class LoadImageErrorAction implements Action {
    readonly type = GalleryActionTypes.LOAD_IMAGE_ERROR;
    constructor(public payload: number) { }
}
export type GalleryActionType = LoadGalleryAction |
    LoadGalleryErrorAction |
    LoadGallerySuccessAction |
    LoadImageAction |
    LoadImageErrorAction |
    LoadImageSuccessAction;
