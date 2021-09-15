import { trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'LifeCycleHooks Practise';
  // public parentMsg = "message from Parent"; 
  
  //Step 1
  private myNumber : number = 25;
  
  isVisible : Boolean = true;
  get counter() {
    return this.myNumber;
  }
  set counter(val){
    this.myNumber = val;
  }

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  swithVisiblity (){
    this.isVisible = !this.isVisible;
  }
}
