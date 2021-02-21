import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGalleryActionTypes from '../store/gallery.actions';
import { AppState } from '../shared/app.reducer';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../shared/image.model';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: Image;
  constructor(private store: Store<AppState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(new fromGalleryActionTypes.LoadImageAction(+this.route.snapshot.params['id']))
  }

}
