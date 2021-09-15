import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

// import { Console } from 'console';

@Component({
  selector: 'app-child',
  
  templateUrl:'./child.component.html',
  styleUrls: ['./child.component.css']

  //Note:-  We need to send the input to class and retrun back to template
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  public data = '';
  public devops = '';
  
  @Input() myNumber:  number ;
  constructor() { }
  // Means What ever the values are changed in ngOnChange() that same value wil
  //Check in ngDoCheck()
  // NgOnint will only once the after ngOnChanges()
  component(){
    console.log("Component Method is called");
  }
  show(){
    if(this.data == "Chandrasekar"){
      return true;
    }else{
      return false;
    }
  }
  ngOnChanges(Changes: SimpleChanges) {
    const newChange: SimpleChange = Changes.myNumber;
    console.log("ngOnchanges () -> Prev value :", newChange.previousValue);
    console.log("ngOnChanges () -> Current Value :", newChange.currentValue);

  }

  ngOnInit(): void {
    console.log("ngOninit () -> Old value:", this.myNumber);
  }
  ngDoCheck() {
    console.log("ngDoCheck () -> Checked value", this.myNumber)
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit () -> Only gets called Once");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked () -> every time this will call");
  }
  ngAfterViewInit() {
    console.log("ngAfterviewInit () -> only once after ngAfterContentChecked () ");
  }

  ngAfterViewChecked() {
    console.log(" ngAfterViewChecked () -> every time this will call after ngAfterviewInit ()", this.myNumber);
  }

  ngOnDestroy() {
    console.log("By Using ngOnDestroy() Component has been Destroyed");
  }

}
