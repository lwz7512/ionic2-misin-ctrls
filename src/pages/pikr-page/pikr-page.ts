import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {PickerModalController} from '../../components/picker-ctnr';
import {MockPickContent} from './mock-picked';

/*
  Picker page...
*/
@Component({
  selector: 'page-pikr-page',
  templateUrl: 'pikr-page.html'
})
export class PikrPage {

  constructor(
    public navCtrl: NavController,
    public modCtrl: PickerModalController,
  ) {}

  ionViewDidLoad() {
    console.log('Hello PikrPage Page');
  }

  openPicker(){
    let picker = this.modCtrl.create(MockPickContent);
    picker.present();
  }

}
