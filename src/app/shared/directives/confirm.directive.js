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
var ConfirmDirective = (function () {
    function ConfirmDirective(el, re) {
        this.el = el;
        this.re = re;
        this.appConfirm = function () { };
        this.confirmMessage = 'Are you sure you want to do this?';
    }
    ConfirmDirective.prototype.confirmFirst = function () {
        var confirmed = window.confirm(this.confirmMessage);
        console.log('confirm was', confirmed);
        if (confirmed) {
            this.appConfirm();
        }
    };
    return ConfirmDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ConfirmDirective.prototype, "appConfirm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ConfirmDirective.prototype, "confirmMessage", void 0);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfirmDirective.prototype, "confirmFirst", null);
ConfirmDirective = __decorate([
    core_1.Directive({
        selector: "[appConfirm]"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], ConfirmDirective);
exports.ConfirmDirective = ConfirmDirective;
//# sourceMappingURL=confirm.directive.js.map