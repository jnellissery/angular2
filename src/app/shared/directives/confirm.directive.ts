import { Directive,ElementRef,Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: `[appConfirm]`
})
export class ConfirmDirective {
  constructor(private el: ElementRef,private re:Renderer){


  }
 
  @Input() appConfirm = () => {};
  
  @Input() confirmMessage = 'Are you sure you want to do this?';
  
  @HostListener('click', ['$event'])
  confirmFirst() {
    const confirmed = window.confirm(this.confirmMessage);
    
    console.log('confirm was', confirmed);
    
    if(confirmed) {
      this.appConfirm();
    }
  }
}