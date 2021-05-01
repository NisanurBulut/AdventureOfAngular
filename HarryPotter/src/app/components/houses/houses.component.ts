import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IHouseType } from 'src/app/models';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses:Array<IHouseType>=[];
  unSubscribeAll = new Subject<any>();

  constructor(private appService:AppService) {
    this.appService.getHouses()
    .pipe(
      takeUntil(this.unSubscribeAll)
    )
      .subscribe(data => {
         this.houses=data;
      });
  }
  ngOnInit(): void {
  }

}
