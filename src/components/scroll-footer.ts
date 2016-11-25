import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

/**
 * use scroll content to determine the visibility of footer bar
 * @2016/11/24
 *
 *	usage: <ion-content padding scrollfooter>
 *
 * @param  {'[scrollfooter]'}} {selector [description]
 * @return {[type]}                      [description]
 */
@Directive({
  selector: '[scrollfooter]'
})
export class ScrollFooter {

  _fixedEle: HTMLElement;
  _scrollEle: HTMLElement;

  _pageEle: HTMLElement;
  _footerEle: Element;

  _historyScrollPosition: number = 0;
  _hidden: boolean;

  constructor(public el: ElementRef, public renderer: Renderer) { }


  ngOnInit():void {
    let children = this.el.nativeElement.children;

    this._fixedEle = children[0];
    this._scrollEle = children[1];

    this._pageEle = this.el.nativeElement.parentNode;
    this._footerEle = this._pageEle.querySelector('ion-footer');

    this._scrollEle.addEventListener('scroll', () => {
      let currentScroll:number = this._scrollEle.scrollTop;
      let diff:number = currentScroll - this._historyScrollPosition;
      // console.log(diff);
      // remember this position to compare next round...
      this._historyScrollPosition = currentScroll;

      if(diff > 0){
        if(this._hidden) return;

        if(currentScroll > 44){
          this._animateFooterDown();
          this._hidden = true;
        }
      }else{
        if(!this._hidden) return;

        this._animateFooterUp();
        this._hidden = false;
      }
    });

  }

  _animateFooterDown(){
    this.renderer.setElementStyle(this._scrollEle, 'marginBottom', '0');
    this.renderer.setElementStyle(this._footerEle, 'transitionDuration', '400ms');
    // move footer down
    this.renderer.setElementStyle(this._footerEle, 'transform', 'translate3d(0, 45px, 0)');
  }

  _animateFooterUp(){
    this.renderer.setElementStyle(this._footerEle, 'transitionDuration', '400ms');
    // restore footer
    this.renderer.setElementStyle(this._footerEle, 'transform', 'translate3d(0, 0, 0)');
    // lazy set bottom margin, so white rectangle do not appear!
    setTimeout(()=>{
      this.renderer.setElementStyle(this._scrollEle, 'marginBottom', '45px');
    }, 400);
  }

  ngOnDestroy():void {
    this._scrollEle.removeEventListener('scroll');
    this._scrollEle = null;
  }

}
