import { Component, ViewChild } from '@angular/core';
import { Content, NavController } from 'ionic-angular';

import {SmartImageController} from '../../components/smtimg-ctrlr';

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

  @ViewChild(Content)
  content:Content;

  wp:any[] = [
    'http://hd.wallpaperswide.com/thumbs/idyllic_landscape_italy-t2.jpg',
    'http://hd.wallpaperswide.com/thumbs/norway_mountains_2-t2.jpg',
    'http://hd.wallpaperswide.com/thumbs/swag_girl_2017_art_irbis_production-t2.jpg',
    'http://hd.wallpaperswide.com/thumbs/cat_118-t2.jpg',
    'http://hd.wallpaperswide.com/thumbs/algodones_dunes_california-t2.jpg'
  ];

  constructor(
    public navCtrl: NavController,
    public smtCtrl: SmartImageController
  ) {}

  ngAfterViewInit() {
    this.smtCtrl.iniLazyLoad(this.content);
  }


  ionViewDidLoad() {
    console.log('Hello LazyimgPage Page');
  }

}
