import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IPersonType } from 'src/app/models/personItem.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters:Array<IPersonType>=[];
  constructor(private appService:AppService) {
    this.appService.getCharacters()
      .subscribe(data => {
         this.characters=data;
      });
  }

  ngOnInit(): void {
  }

}
