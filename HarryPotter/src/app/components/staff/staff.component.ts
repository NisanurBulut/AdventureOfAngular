import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IPersonType } from 'src/app/models/personItem.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff:Array<IPersonType>=[];
  constructor(private appService:AppService) {
    this.appService.getStaff()
      .subscribe(data => {
         this.staff=data;
      });
  }
  ngOnInit(): void {
  }

}
