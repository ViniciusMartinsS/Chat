import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ChatPage } from '../pages/chat/chat';

var config = {
  apiKey: "AIzaSyB0TH-eYsocYT3-doWIBKWSam3kgjGAogk",
  authDomain: "chat-final-fa96a.firebaseapp.com",
  databaseURL: "https://chat-final-fa96a.firebaseio.com",
  projectId: "chat-final-fa96a",
  storageBucket: "chat-final-fa96a.appspot.com",
  messagingSenderId: "152218551336"
};

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  ChatPage
  ],
  imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp),
  AngularFireModule.initializeApp(config),
  AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  ChatPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
