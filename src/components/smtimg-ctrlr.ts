import { Injectable } from '@angular/core';
import {ViewController, Content, Events} from 'ionic-angular';

import {SmartImage} from './smart-image';

@Injectable()
export class SmartImageController {

  smtImages: SmartImage[];
  content: Content;

  constructor(public events: Events){

    this.smtImages = [];
  }

  // public method called in ngAfterViewInit()
  iniLazyLoad(content: Content){
    this.content = content;

    // collect smart image...
    this.events.subscribe('smtImg', params => {
      // console.log(params);
      this.smtImages.push(params);
    });

    // console.log('ng after view init...');
    this.content.ionScroll.subscribe(
      event => {
        // console.log(event);
        this.smtImages.forEach(image => {
            image.scrollNotify();
          }
        );
    });
  }

}
