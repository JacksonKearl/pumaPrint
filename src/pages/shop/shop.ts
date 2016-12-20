import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'shop.html'
})
export class ShopPage {

  products: Array<{ name: String, url: String, description: String, points: Number }>;

  constructor(public navCtrl: NavController, public alertCtrl : AlertController) {
    this.products = [
      { name: "EVO Tank", url: "img/store/tank", description: "Great for tennis workouts", points: 26 },
      { name: "Rhianna's Shirt", url: "img/store/tank2", description: "Perfect running shirt", points: 19 },
      { name: "Great pants", url: "img/store/pants2", description: "Look at these great pants", points: 50 },
      { name: "EVO Shoes", url: "img/store/pants2", description: "Surely the best pants", points: 25 },
      { name: "Speed Shoes", url: "img/store/shoes", description: "\"Nice kicks\", people will say", points: 30 },
      { name: "Nice shoes", url: "img/store/shoes2", description: "Spiffy", points: 75 }
    ]
  }

  showConfirm(product) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you\'d like to buy the ' + product.name + "?",
      message: '',
      buttons: [
        {
          text: 'Wait nevermind',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes! Of course.',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
