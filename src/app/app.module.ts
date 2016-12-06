import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
// --- root component ---
import { MyApp } from './app.component';
// --- custome component ---
import {ResponsibleItem} from '../components/responsible-item';
import {SmartImage} from '../components/smart-image';
import {SmartImageController} from '../components/smtimg-ctrlr';
import {ScrollFooter} from '../components/scroll-footer';
import {SelectableFab} from '../components/selectable-fab';
import {SmartImageDetector} from '../components/smtimg-detcr';
import {AccdTitle, AccdContent, AccdItem, Accordion} from '../components/accordion';
import {PickerContainer, PickerModalController} from '../components/picker-ctnr';

// --- page component ---
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {SmtimgPage} from '../pages/smtimg-page/smtimg-page';
import {LazyimgPage} from '../pages/lazyimg-page/lazyimg-page';
import {HideftPage} from '../pages/hideft-page/hideft-page';
import {AccordionPage} from '../pages/acdn-page/acdn-page';
import {PikrPage} from '../pages/pikr-page/pikr-page';
import {MockPickContent} from '../pages/pikr-page/mock-picked';
import {SelectFabPage} from '../pages/select-fab/select-fab';
import {TopiconBtnPage} from '../pages/topicon-btn/topicon-btn';


@NgModule({
  declarations: [
    // --- components
    ResponsibleItem, //--- directive
    SmartImage,
    ScrollFooter,
    SelectableFab,
    SmartImageDetector,
    AccdTitle,
    AccdContent,
    AccdItem,
    Accordion,
    PickerContainer,
    MockPickContent,
    MyApp, //------------ root component
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SmtimgPage,
    LazyimgPage,
    HideftPage,
    AccordionPage,
    PikrPage,
    SelectFabPage,
    TopiconBtnPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp, {backButtonText: '', tabsHideOnSubPages:"true"})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SmtimgPage,
    LazyimgPage,
    HideftPage,
    AccordionPage,
    PikrPage,
    SelectFabPage,
    TopiconBtnPage,
    PickerContainer,
    MockPickContent,
  ],
  providers: [
    SmartImageController, // declared here only
    PickerModalController,
  ]
})
export class AppModule {}
