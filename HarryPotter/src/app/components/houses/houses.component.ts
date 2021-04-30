import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IHouseType } from 'src/app/models/houses.model';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses:Array<IHouseType>=[];
  constructor(private appService:AppService) {
    this.appService.getHouses()
      .subscribe(data => {
         this.houses=data;
      });
  }
  ngOnInit(): void {
  }

}
