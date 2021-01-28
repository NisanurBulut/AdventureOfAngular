import { Component, Input, OnInit } from '@angular/core';
import { PlanModel } from 'src/app/models';

@Component({
  selector: 'plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.scss']
})
export class PlanItemComponent implements OnInit {
  @Input() planItem = PlanModel;
  constructor() { }

  ngOnInit(): void {
  }
  deletePlan(item: PlanModel) {
    console.log(item);
  }
}
