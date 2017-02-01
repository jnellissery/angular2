import { Directive,ElementRef,Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: `[autogrow]`
})
export class autogrow {
  constructor(private el: ElementRef,private re:Renderer){


  } 
  @HostListener("focus")
  focus(){

      this.re.setElementClass(this.el.nativeElement,"focus",true )
  }
   @HostListener("blur")
  blur(){

      this.re.setElementClass(this.el.nativeElement,"focus",false )
  }
}