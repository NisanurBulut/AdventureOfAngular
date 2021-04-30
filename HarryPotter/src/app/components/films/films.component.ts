import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IFilmType } from 'src/app/models';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  films: Array<IFilmType> = [];
  constructor(private appService: AppService) {
    this.appService.getFilms().subscribe((data) => (this.films = data));
  }

  ngOnInit(): void {}
}
