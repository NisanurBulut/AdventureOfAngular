import { Component, Input, OnInit } from '@angular/core';
import { IFilmType } from 'src/app/models';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input('item') filmItem!: IFilmType;
  constructor() { }

  ngOnInit(): void {
  }

}
