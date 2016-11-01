import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SmtimgPage} from '../smtimg-page/smtimg-page';
import {LazyimgPage} from '../lazyimg-page/lazyimg-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
  ) {

  }

  openSmartImagePage(){
    this.navCtrl.push(SmtimgPage);
  }

  openLazyImagePage(){
    this.navCtrl.push(LazyimgPage);
  }

}
