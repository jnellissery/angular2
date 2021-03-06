"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var visit_rangle_component_1 = require("./visit-rangle.component");
var login_module_1 = require("./login/login.module");
var app_routing_module_1 = require("./app-routing.module");
var shared_module_1 = require("./shared/shared.module");
var confirm_directive_1 = require("./shared/directives/confirm.directive");
var autogrow_directive_1 = require("./shared/directives/autogrow.directive");
var core_module_1 = require("./core/core.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            login_module_1.LoginModule,
            app_routing_module_1.AppRoutingModule,
            core_module_1.CoreModule,
            shared_module_1.SharedModule
        ],
        declarations: [app_component_1.AppComponent, visit_rangle_component_1.VisitRangleComponent, confirm_directive_1.ConfirmDirective, autogrow_directive_1.autogrow],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map