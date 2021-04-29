import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private appService:AppService) {
    this.appService.getCharacters()
      .subscribe(data => {
         console.log(data);
      });
  }

  ngOnInit(): void {
  }

}
