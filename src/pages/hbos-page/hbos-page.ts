import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  hide bar on scroll page
*/
@Component({
  selector: 'page-hbos-page',
  templateUrl: 'hbos-page.html'
})
export class HbosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HbosPage Page');
  }

}
