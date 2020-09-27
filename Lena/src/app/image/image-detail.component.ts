import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: any;
  constructor(private imageService: ImageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']);
  }

}
