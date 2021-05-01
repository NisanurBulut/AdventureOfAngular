import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IPersonType } from 'src/app/models/personItem.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters:Array<IPersonType>=[];
  unSubscribeAll = new Subject<any>();
  constructor(private appService:AppService) {
    this.appService.getCharacters()
    .pipe(
      takeUntil(this.unSubscribeAll)
    )
      .subscribe(data => {
         this.characters=data;
      });
  }

  ngOnInit(): void {
  }

}
