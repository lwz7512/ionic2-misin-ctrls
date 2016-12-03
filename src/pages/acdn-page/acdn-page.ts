import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Accordion page
*/
@Component({
  selector: 'page-acdn-page',
  templateUrl: 'acdn-page.html'
})
export class AccordionPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AcdnPage Page');
  }

}
