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
var router_1 = require("@angular/router");
var NavbarComponent = (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.loginLogoutText = 'Login';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // this.sub = this.authservice.authChanged
        //     .subscribe((loggedIn: boolean) => {
        //         this.setLoginLogoutText();
        //     },
        //     (err: any) => console.log(err));
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NavbarComponent.prototype.loginOrOut = function () {
        // const isAuthenticated = this.authservice.isAuthenticated;
        // if (isAuthenticated) {
        //     this.authservice.logout()
        //         .subscribe((status: boolean) => {
        //             this.setLoginLogoutText();
        //             this.growler.growl('Logged Out', GrowlerMessageType.Info);
        //             this.router.navigate(['/customers']);
        //             return;
        //         },
        //         (err: any) => console.log(err));
        // }
        // this.redirectToLogin();
    };
    NavbarComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.setLoginLogoutText = function () {
        //  this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cm-navbar',
        templateUrl: 'navbar.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map