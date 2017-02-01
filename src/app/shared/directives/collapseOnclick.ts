import { Directive,ElementRef,Renderer, HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: `[collapseOnclick]`
})

export class collapseOnclick {

iscollapsed=false;
@HostBinding("class.collapsed")
get collapsed(){
    return this.iscollapsed
}

        @HostListener('click')
            toggle(){

                this.iscollapsed=!this.iscollapsed;
            }

        

}