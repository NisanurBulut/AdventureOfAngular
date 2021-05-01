import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IPersonType } from 'src/app/models/personItem.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff:Array<IPersonType>=[];
  unSubscribeAll = new Subject<any>();

  constructor(private appService:AppService) {
    this.appService.getStaff()
    .pipe(
      takeUntil(this.unSubscribeAll)
    )
      .subscribe(data => {
         this.staff=data;
      });
  }
  ngOnInit(): void {
  }

}
