// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { SampleComponent } from './sample/sample';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './Hooks/child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CpComponent } from './Intraction/cp/cp.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentService } from './student.service';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StudentListComponent,
    StudentDetailsComponent,
    // CpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [StudentService],
  // here it will check which component is given 
  bootstrap: [AppComponent]
})
export class AppModule { }
