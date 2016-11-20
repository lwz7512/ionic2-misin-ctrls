/**
 * reference:
 * https://github.com/nolimits4web/Framework7/blob/master/src/js/scroll-toolbars.js
 *
 * @2016/11/07
 */
import { Component, Input, ElementRef} from '@angular/core';


@Component({
  selector: 'scroll-bar',
  template: '<div></div>'
})
export class ScrollToolbar {

  constructor(public elm: ElementRef) {

  }

}
