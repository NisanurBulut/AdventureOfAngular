import { Image } from '../shared/image.model';
import * as fromGalleryActionTypes from './gallery.actions';
export interface GalleryState {
    list: Image[];
    loading: boolean;
    error: Error;
}
const initialState: GalleryState = {
    list: [],
    loading: false,
    error: null
};
export function GalleryReducer(state: GalleryState = initialState, action: fromGalleryActionTypes.GalleryActionType) {
    switch (action.type) {
        case fromGalleryActionTypes.GalleryActionTypes.LOAD_GALLERY:
            return { ...state, loading: true };
        case fromGalleryActionTypes.GalleryActionTypes.LOAD_GALLERY_SUCCESS:
            return { ...state, list: action.payload, loading: false };
        case fromGalleryActionTypes.GalleryActionTypes.LOAD_GALLERY_ERROR:
            return { ...state, error: action.payload, loading: false };
        case fromGalleryActionTypes.GalleryActionTypes.LOAD_IMAGE:
            return { ...state, loading: true };
        case fromGalleryActionTypes.GalleryActionTypes.LOAD_IMAGE_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id === action.payload), loading: false
            };
        case fromGalleryActionTypes.GalleryActionTypes.LOAD_IMAGE_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}
