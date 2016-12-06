import { Component, ComponentFactoryResolver, HostListener, Renderer, ViewChild, ViewContainerRef } from '@angular/core';
import { ViewEncapsulation, Injectable } from '@angular/core';

import {App, ViewController, NavOptions, ModalOptions, NavParams, PickerOptions, } from 'ionic-angular';
import {BlockerDelegate, GestureController, GESTURE_MENU_SWIPE, GESTURE_GO_BACK_SWIPE} from 'ionic-angular';

export const isPresent = (val: any) => val !== undefined && val !== null;

/*
  simplyfied version of modal picker , come from modal controller and picker controller
  @2016/12/06
 */

@Component({
  selector: 'picker-ctnr',
  template: `
    <ion-backdrop (click)="bdClick()"></ion-backdrop>
    <div class="picker-wrapper">
      <div class="picker-toolbar">
        <div class="picker-toolbar-button picker-toolbar-cancel">
          <button ion-button class="picker-button" clear (click)="btnClick()">
            Cancel
          </button>
        </div>
        <div class="picker-toolbar-button">
          <button ion-button class="picker-button" clear (click)="btnClick()">
            Done
          </button>
        </div>
      </div>
      <div #viewport nav-viewport></div>
    </div>
  `,
  styles: [`
    .picker-toolbar {
      display: flex;
      height: 44px;
      border-bottom: .55px solid #c8c7cc;
      background: #fff;
    }
    .picker-toolbar-button {
      flex: 1;
      text-align: right;
    }
    .picker-toolbar-cancel {
      text-align: left;
    }
    .picker-wrapper {
      min-height: 200px;
      background-color:#FFFFFF;
    }
    `],
  host: {
    'role': 'dialog'
  },
  encapsulation: ViewEncapsulation.None,
})
export class PickerContainer {

  @ViewChild('viewport', { read: ViewContainerRef })
  _viewport: ViewContainerRef;

  _gestureBlocker: BlockerDelegate;

  constructor(
    public _cfr: ComponentFactoryResolver,
    public _renderer: Renderer,
    public _navParams: NavParams,
    public _viewCtrl: ViewController,
    gestureCtrl: GestureController
  ){
    this._gestureBlocker = gestureCtrl.createBlocker({
      disable: [GESTURE_MENU_SWIPE, GESTURE_GO_BACK_SWIPE]
    });
  }

  ionViewPreLoad() {
    this._load(this._navParams.data.component);
  }

  _load(component: any) {
    if(!component) return;

    const componentFactory = this._cfr.resolveComponentFactory(component);

    // ******** DOM WRITE ****************
    const componentRef = this._viewport.createComponent(componentFactory, this._viewport.length, this._viewport.parentInjector, []);
    this._viewCtrl._setInstance(componentRef.instance);

    this._viewCtrl.willEnter.subscribe(this._viewWillEnter.bind(this));
    this._viewCtrl.didLeave.subscribe(this._viewDidLeave.bind(this));
  }

  bdClick() {
    this.dismiss('backdrop');
  }

  btnClick(){
    this.dismiss('backdrop');
  }

  dismiss(role: any): Promise<any> {
    return this._viewCtrl.dismiss(null, role);
  }

  _viewWillEnter() {
    this._gestureBlocker.block();
  }

  _viewDidLeave() {
    this._gestureBlocker.unblock();
  }

  /** @private */
  _setCssClass(componentRef: any, className: string) {
    this._renderer.setElementClass(componentRef.location.nativeElement, className, true);
  }

  ngOnDestroy() {
    this._gestureBlocker.destroy();
  }

}

export class PickerModal extends ViewController {

  private _app: App;

  constructor(app: App, component: any, data: any, opts: ModalOptions = {}){
    data = data || {};
    data.component = component;
    opts.showBackdrop = isPresent(opts.showBackdrop) ? !!opts.showBackdrop : true;
    opts.enableBackdropDismiss = isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;
    data.opts = opts;
    opts.enableBackdropDismiss = isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;

    super(PickerContainer, data, null);
    this._app = app;
    this.isOverlay = true;
  }

  /**
  * @private
  */
  getTransitionName(direction: string) {
    let key = (direction === 'back' ? 'pickerLeave' : 'pickerEnter');
    return this._nav && this._nav.config.get(key);
  }

  /**
   * Present the picker instance.
   *
   * @param {NavOptions} [opts={}] Nav options to go with this transition.
   * @returns {Promise} Returns a promise which is resolved when the transition has completed.
   */
  present(navOptions: NavOptions = {}) {
    return this._app.present(this, navOptions);
  }

}

@Injectable()
export class PickerModalController {

  constructor(private _app: App) {}
  /**
   * Create a modal to display. See below for options.
   *
   * @param {object} component The Modal view
   * @param {object} data Any data to pass to the Modal view
   * @param {object} opts Modal options
   */
  create(component: any, data: any = {}, opts: ModalOptions = {}):PickerModal {
    return new PickerModal(this._app, component, data, opts);
  }

}
