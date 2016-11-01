import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Picker page...
*/
@Component({
  selector: 'page-pikr-page',
  templateUrl: 'pikr-page.html'
})
export class PikrPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PikrPage Page');
  }

}
