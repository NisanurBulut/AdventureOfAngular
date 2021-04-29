import { Component, Input, OnInit } from '@angular/core';
import { IPersonType } from 'src/app/models/personItem.model';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input('item') personItem!: IPersonType;
  constructor() { }

  ngOnInit(): void {
  }

}
