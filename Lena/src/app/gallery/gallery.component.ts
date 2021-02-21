import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../shared/app.reducer';
import { Image } from '../shared/image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  @Input() filterBy?: string = 'all';
  visibleImages: Observable<Array<Image>>;
  constructor(private store: Store<AppState>) {
    this.visibleImages = this.store.select(s => s.gallery.list);
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit() {
  }

}
