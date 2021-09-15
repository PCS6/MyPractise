import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudent(){
    return [{ "id": 1, "name": "Chandra", "Course": "Angular" },
      { "id": 2, "name": "PCS", "Course": "React" },
      { "id": 3, "name": "ChandraSekar", "Course": "Vue" },
    ];
  }
  constructor() { }
}
