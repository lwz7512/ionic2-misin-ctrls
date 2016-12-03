import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {SmtimgPage} from '../smtimg-page/smtimg-page';
import {LazyimgPage} from '../lazyimg-page/lazyimg-page';
import {HideftPage} from '../hideft-page/hideft-page';
import {SelectFabPage} from '../select-fab/select-fab';
import {TopiconBtnPage} from '../topicon-btn/topicon-btn';
import {AccordionPage} from '../acdn-page/acdn-page';
import {PikrPage} from '../pikr-page/pikr-page';


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

  openHideableBarPage(){
    this.navCtrl.push(HideftPage);
  }

  openSelectableFabtnPage(){
    this.navCtrl.push(SelectFabPage);
  }

  openTopIconButtonPage(){
    this.navCtrl.push(TopiconBtnPage);
  }

  openAccordionPage(){
    this.navCtrl.push(AccordionPage);
  }

  openPickerPage(){
    this.navCtrl.push(PikrPage);
  }


}
