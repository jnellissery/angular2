"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var VisitRangleComponent = (function () {
    function VisitRangleComponent() {
        this.childEvent = new core_1.EventEmitter();
        this.name = "jojo i nellissery";
    }
    VisitRangleComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    VisitRangleComponent.prototype.visitRangle = function () {
        console.log('Visiting rangle');
        location.href = 'https://rangle.io';
    };
    return VisitRangleComponent;
}());
VisitRangleComponent = __decorate([
    core_1.Component({
        selector: 'app-visit-rangle',
        template: "<main class=\"container\">\n              <cm-navbar></cm-navbar>\n              <router-outlet></router-outlet>\n              <h1>{{name}}</h1>\n              <label>Enter Child  Value </label>\n              <input type=\"text\" #childtext (keyup)=\"onChange(childtext.value)\">\n              <p> Value from parent Component</p>\n              {{parentData}}\n            </main>",
        inputs: ['parentData'],
        outputs: ['childEvent']
    })
], VisitRangleComponent);
exports.VisitRangleComponent = VisitRangleComponent;
//# sourceMappingURL=visit-rangle.component.js.map