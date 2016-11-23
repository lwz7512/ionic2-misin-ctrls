import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
import {Events} from 'ionic-angular';
/**
 * selectable fab button, support deselect other btns while select one
 * @2016/11/22
 * @param  {'[responsible]'}} {selector [description]
 * @return {[type]}                     [description]
 */
@Directive({
  selector: '[selectable]'
})
export class SelectableFab {

  selected: boolean = false;
  _uid: number;

  constructor(
    public el: ElementRef,
    public renderer: Renderer,
    public events:Events
  ) {

  }

  // create uid here is a must! @2016/11/23
  ngOnInit():void{
    this._uid = Math.random();

    this.events.subscribe('selected', uid => {
      if(uid == this._uid) return;

      this._restore();
    });
  }

  @HostListener('touchstart') onMouseEnter() {

  }
  @HostListener('touchend') onMouseLeave() {
    this._highlight();
  }

  _highlight() {
    if(!this.selected){
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#00A3A1');
      // notify other btn to deselect @2016/11/22
      this.events.publish('selected', this._uid);
    }else{
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#CCCCCC');
    }
    this.selected = !this.selected;
  }

  _restore() {
    if(this.selected){
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#CCCCCC');
      this.selected = false;
    }
  }


}
