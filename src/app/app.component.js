"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./shared/services/employee.service");
var AppComponent = (function () {
    function AppComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.employees = new Array();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.employees = this._employeeService.getEmployess();
    };
    AppComponent.prototype.onSubmit = function (val) {
        console.log(val);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-app-component',
        providers: [employee_service_1.EmployeeService],
        // template: `<h2> Parent App Component</h2>
        // <label>Enter Parent Component</label>
        // <input type="text" #ptext (keyup)="0">
        // <input type ="text" [(ngModel)]="firstname">
        // <input type ="text" [(ngModel)]="lastname">
        // <p> Value from child Component </p>
        // <p>{{firstname}} {{lastname}}</p>
        // {{childData}}
        // <app-visit-rangle (childEvent)="childData=$event"  [parentData]="ptext.value"></app-visit-rangle>`
        templateUrl: "app.component.html"
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map