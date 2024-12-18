import { Component } from "@angular/core";
@Component({
  standalone: false,
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}} </h3>
  <button  (click)="increment(+1)" >+1</button>
  <button  (click)="reset()" >Reset</button>
  <button (click)="increment(-1)">-1</button>
  `,
})

export class CounterComponent {
  public counter:number = 0;

  increment(value:number):void {
    this.counter += value;
  }
  reset():void {
    this.counter = 0;
  }
}
