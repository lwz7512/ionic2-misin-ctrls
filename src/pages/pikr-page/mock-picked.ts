import {Component} from '@angular/core';

@Component({
  selector: 'mock-content',
  template: `
    <p>this is mock content popup by picker-ctnr...</p>
    <button ion-button color="primary">Button</button>
  `,
  styles: [`
    p {
      padding: 10px;
    }
  `]
})

export class MockPickContent {

  constructor(){

  }

}
