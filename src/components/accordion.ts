import { Component, Input, ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'accd-title',
  template: `
    <a href="#" class="item-content item-link">
      <div class="item-inner">
        <div class="item-title">
          <ng-content></ng-content>
        </div>
      </div>
    </a>`
})
export class AccdTitle{

  constructor(public elm: ElementRef){}

  ngOnInit():void {
    let acdTitle: HTMLElement = this.elm.nativeElement;
    acdTitle.querySelector('a').addEventListener('click', e => {
      e.preventDefault();// prevent native event broadcast
    });
  }

}

@Component({
  selector: 'accd-content',
  template: `
    <div class="accordion-item-content">
      <div class="content-block">
        <ng-content></ng-content>
      </div>
    </div>`
})
export class AccdContent{}

@Component({
  selector: 'accordion-item',
  template: `<li class="accordion-item">
    <ng-content selector="accd-title"></ng-content>
    <ng-content selector="accd-content"></ng-content>
  </li>`
})
export class AccdItem {

  _accdItemElm:Element;
  _contentElm: Element;
  _contentHeight: number;

  constructor(public elm: ElementRef, public renderer: Renderer) {}

  ngOnInit(): void {

    this._accdItemElm = this.elm.nativeElement;
    this._contentElm = this._accdItemElm.querySelector('.accordion-item-content');
    this._contentHeight = this._contentElm.scrollHeight + 10 ;

    let open:boolean = this._accdItemElm.hasAttribute('open');
    if(open) {
      this._accdItemElm.querySelector('.accordion-item').classList.add('accordion-item-expanded');
      this.renderer.setElementStyle(this._contentElm, 'height', 'auto');
    }

    let link: Element = this._accdItemElm.querySelector('a.item-link');
    link.addEventListener('click', ()=>{
      this._expandOrShrink();
    });
  }

  _expandOrShrink(){
    let item: Element = this.elm.nativeElement;
    let licls:DOMTokenList = item.querySelector('.accordion-item').classList;

    if(licls.contains('accordion-item-expanded')){//to shrink
      licls.remove('accordion-item-expanded');
      this.renderer.setElementStyle(this._contentElm, 'height', '0');
    }else{//to expand
      licls.add('accordion-item-expanded');
      this.renderer.setElementStyle(this._contentElm, 'height', this._contentHeight+'px');
    }
  }

}

@Component({
  selector: 'accordion-list',
  template: `
  <div class="list-block accordion-list">
    <ul>
      <ng-content></ng-content>
    </ul>
  </div>`,
})
export class Accordion {

  constructor(public elm: ElementRef) {}

  ngOnInit(): void {

  }

}
