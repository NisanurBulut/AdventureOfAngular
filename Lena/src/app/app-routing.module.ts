import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';

export const routes: Routes = [
    { path: 'gallery', component: GalleryComponent },
    { path: 'image/:id', component: ImageDetailComponent },
    { path: '', redirectTo: '/gallery', pathMatch: 'full' }
];
