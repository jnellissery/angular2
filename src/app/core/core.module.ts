import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';



import { NavbarComponent } from './navbar/navbar.component';

import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';

@NgModule({
  imports: [ CommonModule, RouterModule, HttpModule],
  exports: [ RouterModule, HttpModule, NavbarComponent ],
  declarations: [ NavbarComponent ]
  // providers: [ SorterService, FilterService, DataService, TrackByService, 
  //              DialogService, ValidationService, AuthService ] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}



