import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IPersonType } from 'src/app/models/personItem.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:Array<IPersonType>=[];
  constructor(private appService:AppService) {
    this.appService.getStudents()
      .subscribe(data => {
         this.students=data;
      });
  }

  ngOnInit(): void {
  }

}
