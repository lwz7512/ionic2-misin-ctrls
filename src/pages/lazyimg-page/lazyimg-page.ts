import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LazyimgPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lazyimg-page',
  templateUrl: 'lazyimg-page.html'
})
export class LazyimgPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LazyimgPage Page');
  }

}
