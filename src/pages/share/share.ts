import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { StateService } from '../../app/state';
import { User } from '../../app/user';


@Component({
  selector: 'page-contact',
  templateUrl: 'share.html'
})
export class SharePage {


  mySlideOptions = {
    pager: true
  };

  searchTerms: any;
  searchString: string;

  shared: Array<{name: string, text: string, imageURL: string, ncomments: number, nlikes: number, visible: boolean}>;

  goals: Array<{ title: string, type:string, description: string,toComplete: string,  points: number }>;

  user: User;

  constructor(state:StateService, public alertCtrl : AlertController) {
    this.user = state.getUser();

    this.searchTerms = {};
    for (var term in this.user.icons)
      this.searchTerms[term] = true;

    this.goals = [
      { title: "Show us your latest Puma outfit", type:"image",  description: "We know you've got the scoop on the latest trends, lets see what outfit you can put together with some puma gear.", toComplete:"Send us the Snapchat!", points: 20 },
      { title: "Review your new Shoes", type:"create", description: "You revently got the new Puma EVO x2000 Shoe system, now that youve had a bit to try them on, tell us what you think.", toComplete:"Click here to write a review!", points: 30 },
      { title: "Log a workout in your EVO Tank top", type:"image", description: "We haven heard from the red Puma EVO tank of yours recently... How about you log a workout together!", toComplete:"Send us the Snapchat!", points: 20 },
    ]


    this.shared = [
      {name:"Marjorie Sims", text:"Great time today. Used my new PUMA yoga pants, excellent fit.", imageURL:"share-yoga1.jpg", ncomments: 1, nlikes: 10, visible: true},
      {name:"Mark Oliver", text:"Really nice spot I found", imageURL:"share-yoga2.jpg", ncomments: 5, nlikes: 3, visible: true},
      {name:"Erin Kelley", text:"Fuck this yoga bullshit", imageURL:"share-yoga3.jpg", ncomments: 12, nlikes: 423, visible: true},

      {name:"Delores Wood", text:"", imageURL:"share-run1.jpg", ncomments: 32, nlikes: 313, visible: true},
      {name:"Eusain Bolt", text:"", imageURL:"share-run2.jpeg", ncomments: 431, nlikes: 6345, visible: true},

      {name:"Serena Williams", text:"", imageURL:"share-tennis1.jpg", ncomments: 12, nlikes: 454, visible: true},
      {name:"Debra Freeman", text:"", imageURL:"share-tennis2.jpg", ncomments: 23, nlikes: 523, visible: true},
    ]

    this.initializeItems();
  }

  initializeItems() {
    for (var item of this.shared) {
        item.visible = true;
    }
  }


  toggleTerm(term) {
    this.searchTerms[term] = !this.searchTerms[term];

    var searchString = "";

    for (var term_ in this.searchTerms) {
      if (this.searchTerms[term_]) {
        searchString += term_;
      }
    }
    this.getItems(searchString);
  }

  getItems(term: string) {
    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the searchbar

    // if the value is an empty string don't filter the items
    if (term && term.trim() != '') {
      for (var item of this.shared) {
        if (JSON.stringify(item).toLowerCase().indexOf(term.toLowerCase()) == -1) {
          item.visible = false;
        } else {
          item.visible = true;
        }
      }
    }
  }
}
