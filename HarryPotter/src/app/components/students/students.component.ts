import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IPersonType } from 'src/app/models/personItem.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:Array<IPersonType>=[];
  unSubscribeAll = new Subject<any>();

  constructor(private appService:AppService) {
    this.appService.getStudents()
    .pipe(
      takeUntil(this.unSubscribeAll)
    )
      .subscribe(data => {
         this.students=data;
      });
  }

  ngOnInit(): void {
  }

}
