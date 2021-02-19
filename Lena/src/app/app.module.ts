import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlertConfig, AlertModule } from 'ngx-bootstrap/alert';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { ImageService } from './shared/image.service';
import { ImageFilterPipe } from './shared/filter.pipe';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

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
    AlertModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [AlertConfig, ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
