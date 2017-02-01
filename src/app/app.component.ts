import { Component ,OnInit} from '@angular/core';
import { VisitRangleComponent} from './visit-rangle.component'
import {EmployeeService} from './shared/services/employee.service'
@Component({ 
  moduleId: module.id,
  selector: 'cm-app-component',
  providers:[EmployeeService],
  // template: `<h2> Parent App Component</h2>
  // <label>Enter Parent Component</label>
  // <input type="text" #ptext (keyup)="0">
  // <input type ="text" [(ngModel)]="firstname">
  // <input type ="text" [(ngModel)]="lastname">
  // <p> Value from child Component </p>
  // <p>{{firstname}} {{lastname}}</p>
  // {{childData}}
  // <app-visit-rangle (childEvent)="childData=$event"  [parentData]="ptext.value"></app-visit-rangle>`
  templateUrl:"app.component.html"
})
export class AppComponent implements OnInit {
    public  childData:string;
    public firstname:string;
    public lastname:string;
    public employee : any[];
 employees= new Array();
    constructor(private _employeeService: EmployeeService){
          
    }
ngOnInit(){

   this.employees =this._employeeService.getEmployess();

}
    onSubmit(val:any){
      console.log(val);

    }
  }
