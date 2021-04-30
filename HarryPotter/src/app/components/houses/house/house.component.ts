import { Component, Input, OnInit } from '@angular/core';
import { IHouseType } from 'src/app/models/houses.model';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  @Input('item') houseItem!: IHouseType;
  constructor() { }

  ngOnInit(): void {
  }

}
