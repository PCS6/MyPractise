About Structural Directives

Structural Directives are used to add or removing HTML elements from template

Most Commonly used Structural Directives are 
Below two Directives are used for Conditional rendering 
        *ngIf
        ngSwitch
Below is for render the list of elements
        ngFor

Compoent Interaction
=======================

Define a value in Parent ts file 
We have given selector in main component html there pass the value which we define in parent ts
[fromParent]="parentMsg"
Now go to child Component 
Use @Input in class 
@input public fromParent;
by using interpolation call the FromParent