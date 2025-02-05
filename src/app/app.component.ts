import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ProfilePage } from '../pages/profile/profile';
import { ScorePage } from '../pages/score/score';
import { SharePage } from '../pages/share/share';
import { ShopPage } from '../pages/shop/shop';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProfilePage;

  currentPage: any = ProfilePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My Profile', component: ProfilePage },
      { title: 'Goals', component: ScorePage },
      { title: 'Community', component: SharePage },
      { title: 'Store', component: ShopPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.currentPage = page.component;
    this.nav.setRoot(page.component);
  }
}
