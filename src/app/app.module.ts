import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { ScorePage } from '../pages/score/score';
import { SharePage } from '../pages/share/share';
import { ShopPage } from '../pages/shop/shop';
import { GoalsPage } from '../pages/goals/goals';
import { StateService } from './state';



@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ScorePage,
    SharePage,
    ShopPage,
    GoalsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ScorePage,
    SharePage,
    ShopPage,
    GoalsPage
  ],
  providers: [StateService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
