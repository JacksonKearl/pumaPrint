import { Injectable } from '@angular/core';

import { User } from './user';


@Injectable()
export class StateService {
  lissy: User = new User(
    "Lisa",
    "Hey there! Follow me for me for fun times.",

    "img/lisa.jpg",
    "img/point-meter.png",

    [
      { value: +50, title: "Connected Instagram Account", icon: "logo-instagram", date:"just now", description:"", chance:0},
      { value: +50, title: "Connected Pinterest Account", icon: "logo-pinterest", date:"earlier today", description:"", chance: 0 },
      { value: +50, title: "Connected Snapchat Account", icon: "logo-snapchat", date:"earlier today", description:"", chance: 0 },

      { value: +25, title: "Selecting Activity: Running", icon: "walk", date:"earlier today", description:"", chance: 0 },
      { value: +25, title: "Selecting Activity: Yoga", icon: "yoga", date:"earlier today", description:"", chance: 0 },
      { value: +25, title: "Selecting Activity: Tennis", icon: "basketball", date:"earlier today", description:"", chance: 0 },
      
      { value: +50, title: "Connected TrueFit Account", icon: "cloud", date:"earlier today", description:"", chance: 0 },
    ],

    null, //current goal
    null, //current task

    [
      { title: "Beat my personal 5k record", description: "Your best recorded 5k is 21:34, think you can try for a 21:00?", value: 40, icon: "", date:"this month", chance: 30},
      { title: "Invite a friend to PUMA", description: "While you're at tennis, how about you invite your mate over to join Puma?", value: 30, icon:"", date:"this week", chance: 60  },
      {title: "Get Fitted In-Store", description: "Stop by a PUMA store to have us digitally modeal your body. This ensures a perfect fit for all PUMA Purchases!", icon: "walk", value: 200, date: "", chance: 60},
      { title: "Hit the gym", description: "Let's try to get to the gym for at least 4 hours of class", value: 20, icon: "", date:"this week", chance: 67 },
      { title: "Walk the streets", description: "10,000 steps per day for the next 7 days. 70,000 steps total. Are you up for it?", value: 15, icon:"", date:"this week", chance :50  },
      { title: "Sleep sufficiently", description: "Think you can get a full 8 hours of sleep this week? Let's see it happen.", value: 10,icon:"", date:"this week", chance: 95 }
    ],   // tasks

    [
      {title: "Get free shipping on your next purchase", icon: "cash", value: "200"},
      {title: "Upgrade your tickets to Rihanna's Cambridge performance", icon: "musical-notes", value: "1000"},
      {title: "Get a free set of tennis balls with your next order", icon: "basketball", value: "500"},
      {title: "Try out Puma's new yoga pants", icon: "yoga", value: "320"}
    ],   // goals

    ["yoga", "walk", "basketball"]
  );

  getUser(): User {
    return this.lissy;
  }

}