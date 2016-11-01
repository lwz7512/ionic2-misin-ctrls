import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SmtimgPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-smtimg-page',
  templateUrl: 'smtimg-page.html'
})
export class SmtimgPage {

  images: string[];

  constructor(public navCtrl: NavController) {
    this.images = [
      'http://www.freedigitalphotos.net/images/img/homepage/339504.jpg',
      'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
      'http://www.freedigitalphotos.net/images/img/homepage/394230.jpg',
      'http://www.freedigitalphotos.net/images/img/homepage/389590.jpg'
    ];
  }

  ionViewDidLoad() {
    console.log('Hello SmtimgPage Page');
  }

}
