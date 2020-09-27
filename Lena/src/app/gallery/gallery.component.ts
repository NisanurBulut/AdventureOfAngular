import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  @Input() filterBy?: string = 'all';
  visibleImages: any[] = [];
  constructor(private imageService: ImageService) {
    this.visibleImages = imageService.getImages();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
  }

}
