import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  demo page for hide foot-bar on scroll content
*/
@Component({
  selector: 'page-hideft-page',
  templateUrl: 'hideft-page.html'
})
export class HideftPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HideftPage Page');
  }

  scrollHandler() {
    console.log('scrolled!');
  }

}
