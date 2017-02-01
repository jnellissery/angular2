import {Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visit-rangle',
  template: `<main class="container">
              <cm-navbar></cm-navbar>
              <router-outlet></router-outlet>
              <h1>{{name}}</h1>
              <label>Enter Child  Value </label>
              <input type="text" #childtext (keyup)="onChange(childtext.value)">
              <p> Value from parent Component</p>
              {{parentData}}
            </main>`,
  inputs:['parentData'],
  outputs:['childEvent']
})

export class VisitRangleComponent {
  public parentData :string
  public childEvent= new EventEmitter<string>();
  onChange(value:string){
   this.childEvent.emit(value);
  }
name :string="jojo i nellissery"
  visitRangle() {
    console.log('Visiting rangle');
    location.href = 'https://rangle.io';
  }
}