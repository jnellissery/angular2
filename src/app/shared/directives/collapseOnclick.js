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
var collapseOnclick = (function () {
    function collapseOnclick() {
        this.iscollapsed = false;
    }
    Object.defineProperty(collapseOnclick.prototype, "collapsed", {
        get: function () {
            return this.iscollapsed;
        },
        enumerable: true,
        configurable: true
    });
    collapseOnclick.prototype.toggle = function () {
        this.iscollapsed = !this.iscollapsed;
    };
    return collapseOnclick;
}());
__decorate([
    core_1.HostBinding("class.collapsed"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], collapseOnclick.prototype, "collapsed", null);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], collapseOnclick.prototype, "toggle", null);
collapseOnclick = __decorate([
    core_1.Directive({
        selector: "[collapseOnclick]"
    })
], collapseOnclick);
exports.collapseOnclick = collapseOnclick;
//# sourceMappingURL=collapseOnclick.js.map