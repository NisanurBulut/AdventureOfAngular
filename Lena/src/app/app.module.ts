import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlertConfig, AlertModule } from 'ngx-bootstrap/alert';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { GalleryService } from './shared/gallery.service';
import { ImageFilterPipe } from './shared/filter.pipe';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { GalleryReducer } from './store/gallery.reducer';
import { GalleryEffect } from './store/gallery.effects';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ gallery: GalleryReducer }),
    EffectsModule.forRoot([GalleryEffect]),
    AlertModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [AlertConfig, GalleryService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
