import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {Injectable} from '@angular/core';

import { HomePage } from '../pages/home/home';
// import { LegalPage } from '../pages/legal/legal';
import { ProfilePage } from '../pages/profile/profile';
import { PebblPage } from '../pages/pebbl/pebbl';
import { FaqPage } from '../pages/faq/faq';
import { BluetoothPage } from '../pages/bluetooth/bluetooth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  pages: Array<{title: string, icon: string, component: any}>;

  constructor(platform: Platform,
  public app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.pages = [
    { title: 'Home Base', icon: 'home', component: HomePage },
    { title: 'Profile', icon: 'ios-ionitron', component: ProfilePage },
    { title: 'Characters', icon: 'logo-octocat', component: PebblPage },
    { title: 'Mission Status', icon: 'logo-snapchat', component: FaqPage },
    // { title: 'Legal', icon: 'document', component: LegalPage },
    {title: 'Bluetooth', icon: 'bluetooth', component: BluetoothPage  }
  ];
  }

  pushPage(page){
    this.app.getRootNav().push(page.component);
  }
}
