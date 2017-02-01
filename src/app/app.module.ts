import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {VisitRangleComponent} from  './visit-rangle.component';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule }   from './shared/shared.module';
import { ConfirmDirective } from './shared/directives/confirm.directive';
import {autogrow} from  './shared/directives/autogrow.directive';
import {collapseOnclick} from  './shared/directives/collapseOnclick';
import { CoreModule }   from './core/core.module';
@NgModule({
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,     //Main routes for application
    CoreModule,
    SharedModule 
  ],
  declarations: [ AppComponent,VisitRangleComponent, ConfirmDirective,autogrow],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }