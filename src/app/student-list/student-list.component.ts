import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  template: `
    <h1>
      student-list works!
    </h1>
    <div class="list">
  <ul *ngFor="let x of students">
    <li class="list_order">
    {{x.name}}
    </li>
  </ul>
  </div>
  `,
  styles: [
    
  ]
})
export class StudentListComponent implements OnInit {

  public students = [] as any;
  constructor(private _stdService: StudentService) { }

  ngOnInit() {
    this.students = this._stdService.getStudent();
  }

}
