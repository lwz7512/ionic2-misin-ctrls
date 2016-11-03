/**
 * @name SmartImage
 *
 * @description
 * typscript version of smart image with loading and error handling ...
 * inspired by: http://ngmodules.org/modules/angular-img-fallback
 * and used its base64 imag conent, thanks!
 *
 * also Images Lazy Load:
 * http://framework7.io/docs/lazy-load.html
 * and used its viewport check method
 *
 * created @2016/09/07
 *
 * @usage
 *
 * ```html
 * <smt-img src="{{someOBj.url}}" lazy></smt-img>
 * ```
 * then include this component in parent component:
 *
 * import {SmartImage} from '../../components/smart-image';
 *

 *
 *
 */
import { Component, Input, ElementRef} from '@angular/core';
import {Events} from 'ionic-angular';

@Component({
    // 用类似jq的selector来查找dom中的元素，并添加行为到它上面
    selector: 'smt-img',
    template: '<img />'
})
export class SmartImage {

  // save the image url
  _imgURL = null;
  // indicate whether lazy load real image...
  _delayLoad: boolean;

  _loopChecker: boolean;

  _fakeImg: HTMLImageElement;

  //access tag attribute 'src'
  @Input()
  set src(val: string){
    // console.log('set: '+val);
    this._imgURL = val;
  }

  @Input()
  set lazy(val: string){
    this._delayLoad = true;
  }

  constructor(public elm: ElementRef, public events:Events) {}

  ngOnInit(): void {

    let image = this.elm.nativeElement.children[0];
    let loadingURL = this._getLoadingImg();
    // 先显示加载地址
    image.src = loadingURL;

    // use inline image instance to preload...
    this._fakeImg = new Image();
    this._fakeImg.addEventListener('error', ()=>{
      image.src = this._getMissingImg();
    });
    this._fakeImg.addEventListener('load', ()=>{
      image.src = this._imgURL;//load complete
    });

    // FIXME, first check to detect if exist in viewport currently
    // @2016/10/06
    let inViewport = this._isElementInViewport(this.elm.nativeElement);
    if(inViewport) this._delayLoad = false;

    if(this._delayLoad) {
      // console.log('start lazy loading...');
      this._startLazyLoadCheck();
      return;
    }

    this._fakeImg.src = this._imgURL;//start loading...

  }

  // callback by SmartImageController
  // @2016/10/01
  scrollNotify(){
    if(this._loopChecker) return;
    if(!this._delayLoad) return;

    let inViewport = this._isElementInViewport(this.elm.nativeElement);
    if(inViewport){
      //start loading...
      this._fakeImg.src = this._imgURL;

      this._stopLazyLoadCheck();
    }
  }

  // nothing to do
  ngOnDestroy():void{

  }

  // register this image to controller;
  // FIXME, delay to notify, waiting for main page init...
  // @2016/11/03
  _startLazyLoadCheck(){
    console.log('notify ctrl...');
    setTimeout(()=>this.events.publish('smtImg', this), 100);
  }

  _stopLazyLoadCheck(){
    this._loopChecker = true;
  }

  _isElementInViewport (el) {
      var rect = el.getBoundingClientRect();
      var threshold = 0;
      return (
        rect.top >= (0 - threshold) &&
        rect.left >= (0 - threshold) &&
        rect.top <= (window.innerHeight + threshold) &&
        rect.left <= (window.innerWidth + threshold)
      );
  }

  _getLoadingImg(){
    let base64prefix = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNTAwIiBjeT0iNTAwIiByPSI1MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkZmRmZGYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5OTkiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3JhZGlhbC1ncmFkaWVudCkiIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNjAxIDQxNGwwIDBWNTg2bDAgMEgzOTlsMCAwVjQxNGwwIDBINjAxWm0wLTE0SDM5OUExNCAxNCAwIDAgMCAzODUgNDE0djE3M2ExNCAxNCAwIDAgMCAxNCAxNEg2MDFBMTQgMTQgMCAwIDAgNjE1IDU4NlY0MTRhMTQgMTQgMCAwIDAtMTQtMTRoMFpNNTc';
    let loadingDefault = `${base64prefix}1IDUwMmE3NyA3NyAwIDAgMC0yNC01NCA3NiA3NiAwIDAgMC0yNS0xNiA3NSA3NSAwIDAgMC01NyAxQTc0IDc0IDAgMCAwIDQzMCA0NzQgNzMgNzMgMCAwIDAgNDMxIDUzMGE3MiA3MiAwIDAgMCAzOSAzOCA3MCA3MCAwIDAgMCA1NC0xIDY5IDY5IDAgMCAwIDM3LTM4IDY4IDY4IDAgMCAwIDQtMTZsMSAwYTEwIDEwIDAgMCAwIDEwLTEwYzAgMCAwLTEgMC0xaDBabS0xNSAyNmE2NyA2NyAwIDAgMS0zNyAzNSA2NiA2NiAwIDAgMS01MC0xIDY0IDY0IDAgMCAxLTM0LTM1QTYzIDYzIDAgMCAxIDQ0MCA0NzkgNjIgNjIgMCAwIDEgNDU0IDQ1OSA2MiA2MiAwIDAgMSA0NzQgNDQ2YTYxIDYxIDAgMCAxIDIzLTQgNjAgNjAgMCAwIDEgNDIgMTlBNTkgNTkgMCAwIDEgNTUyIDQ4MGE1OCA1OCAwIDAgMSA0IDIyaDBjMCAwIDAgMSAwIDFhMTAgMTAgMCAwIDAgOSAxMCA2NyA2NyAwIDAgMS01IDE1aDBaIi8+PC9zdmc+`;
    return loadingDefault;
  }

  _getMissingImg(){
    // Both images have the same prefix we can save some space on that
    let base64prefix = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNTAwIiBjeT0iNTAwIiByPSI1MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkZmRmZGYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5OTkiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3JhZGlhbC1ncmFkaWVudCkiIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNjAxIDQxNGwwIDBWNTg2bDAgMEgzOTlsMCAwVjQxNGwwIDBINjAxWm0wLTE0SDM5OUExNCAxNCAwIDAgMCAzODUgNDE0djE3M2ExNCAxNCAwIDAgMCAxNCAxNEg2MDFBMTQgMTQgMCAwIDAgNjE1IDU4NlY0MTRhMTQgMTQgMCAwIDAtMTQtMTRoMFpNNTc';
    let missingDefault = `${base64prefix}yIDQ1MGEyMiAyMiAwIDEgMS0yMi0yMkEyMiAyMiAwIDAgMSA1NzIgNDUwWk01ODYgNTcySDQxNFY1NDNsNTAtODYgNTggNzJoMTRsNTAtNDN2ODZaIi8+PC9zdmc+`;

    return missingDefault;
  }



}
