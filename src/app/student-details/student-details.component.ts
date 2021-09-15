import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  template: `
    <p>
      student-details works!
    </p>
    <div class="list">
  <ul *ngFor="let x of students">
    <li class="list_order">
   {{x.id}} {{x.name}} {{x.Course}}
    </li>
  </ul>
  </div>
  `,
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {

public students = [ ] as any;
  constructor(private _stdService:StudentService) { }

  ngOnInit() {
    this.students = this._stdService.getStudent();

  }

}
