import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'goals.html',
  selector: 'page-page3',

})
export class GoalsPage {

  goals: Array<{ title: String, description: String, points: Number }>;

  constructor( public alertCtrl : AlertController, public nav: NavController) {
    this.goals = [
      { title: "Save on 10% EVO tennis shoes", description: "These are the best shoes for your sports, perfect for running and tennis alike.", points: 400 },
      { title: "Free Spincycle Gloves", description: "Tired of all those bilsters on your fingers? Try out a pair of our experimental Spin gloves.", points: 300 }
    ]
  }

  showConfirm(goal) {
    let confirm = this.alertCtrl.create({
      title: "Success!",
      subTitle: "Set "+goal.title+" as your target reward.",
      buttons: [{
          text: 'Okay!',
          handler: data => {
            this.nav.pop();

          }
        }]
    });
    confirm.present();
  }

}
