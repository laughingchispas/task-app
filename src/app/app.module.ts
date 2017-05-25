import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewSubTaskPage } from '../pages/new-sub-task/new-sub-task';
import { NewTaskPage } from '../pages/new-task/new-task';
import { ViewTaskPage } from '../pages/view-task/view-task';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewSubTaskPage,
    NewTaskPage,
    ViewTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewSubTaskPage,
    NewTaskPage,
    ViewTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
