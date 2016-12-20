import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { StateService } from '../../app/state'
import { User } from '../../app/user'
import { Goal } from '../../app/goal'


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: User;
  tab: number = 1;

  constructor(state:StateService, public navCtrl: NavController) {
    this.user = state.getUser();
  }

  goTab(tab : number) {
    this.tab = tab;
  }

  select(reward: Goal) {
    this.user.currentGoal = reward;
  }

}
