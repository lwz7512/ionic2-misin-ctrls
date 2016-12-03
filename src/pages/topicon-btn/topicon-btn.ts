import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TopiconBtn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-topicon-btn',
  templateUrl: 'topicon-btn.html'
})
export class TopiconBtnPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TopiconBtnPage Page');
  }

}
