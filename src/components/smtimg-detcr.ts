import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
import {Events} from 'ionic-angular';
import {SmartImage} from './smart-image';

/**
 * smart-image component detector in ion-content, then notify it
 * this is a simplify version of smtimg-ctrlr.
 * @2016/11/25
 *
 * usage: <ion-content padding smtimgdetector>
 *
 * @param  {'[smtimgdetector]'}} {selector [description]
 * @return {[type]}                        [description]
 */
@Directive({
  selector: '[smtimgdetector]'
})
export class SmartImageDetector {

  _fixedEle: HTMLElement;
  _scrollEle: HTMLElement;

  _pageEle: HTMLElement;

  smtImages: SmartImage[];

  constructor(
    public el: ElementRef,
    public renderer: Renderer,
    public events: Events,
  ) {
    this.smtImages = [];
  }

  ngOnInit():void {
    let children = this.el.nativeElement.children;

    this._fixedEle = children[0];
    this._scrollEle = children[1];

    // listen to scroll to notify...
    this._scrollEle.addEventListener('scroll', () => {
      this.smtImages.forEach(image => {
        // image callback to check viewpot...
        image.scrollNotify();
      })
    });
    // listen to smart image ini...
    this.events.subscribe('smtImg', params => {
      this.smtImages.push(params);
    });
  }

}
