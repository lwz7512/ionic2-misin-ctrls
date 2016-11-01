import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
// --- root component ---
import { MyApp } from './app.component';
// --- custome component ---
import {ResponsibleItem} from '../components/responsible-item';
import {SmartImage} from '../components/smart-image';
import {SmartImageController} from '../components/smtimg-ctrlr';
// --- page component ---
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {SmtimgPage} from '../pages/smtimg-page/smtimg-page';
import {LazyimgPage} from '../pages/lazyimg-page/lazyimg-page';

@NgModule({
  declarations: [
    // --- components
    ResponsibleItem, //--- directive
    SmartImage,
    MyApp, //------------ root component
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SmtimgPage,
    LazyimgPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
  ],
  providers: [
    SmartImageController, // 只能声明在这里
  ]
})
export class AppModule {}
