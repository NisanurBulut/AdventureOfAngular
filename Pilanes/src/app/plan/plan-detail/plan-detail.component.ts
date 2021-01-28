import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanModel } from 'src/app/models';
import { Observable,interval } from 'rxjs';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss']
})
export class PlanDetailComponent implements OnInit {
  planItem: PlanModel;
  counter: number = 0;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  constructor(public dialogRef: MatDialogRef<PlanDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any) {
    this.planItem = _data
    console.log(this.planItem);
  }

  ngOnInit(): void {
   this.startInterval();
  }

  private startInterval(): void {
    interval(300).subscribe(
      (value: number) => {
        this.counter = value;
        console.log(this.counter);
      },
      (error: any) => {
        console.log('error');
      },
      () => {
        console.log('observable completed !');
      }
    );
  }
}
