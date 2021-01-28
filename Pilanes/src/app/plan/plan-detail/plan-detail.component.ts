import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanModel } from 'src/app/models';

@Component({
  selector: 'plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss']
})
export class PlanDetailComponent implements OnInit {
  planItem: PlanModel;
  constructor(public dialogRef: MatDialogRef<PlanDetailComponent>,
              @Inject(MAT_DIALOG_DATA) private _data: any) {
    this.planItem = _data
    console.log(this.planItem);
  }

  ngOnInit(): void {
  }

}
