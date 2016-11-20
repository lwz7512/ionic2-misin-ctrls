import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HideftPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
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

}
