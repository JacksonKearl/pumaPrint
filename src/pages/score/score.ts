import { Component } from '@angular/core';
import { StateService } from '../../app/state';
import { Task } from '../../app/task';
import { User } from '../../app/user';


@Component({
  selector: 'page-page2',
  templateUrl: 'score.html'
})
export class ScorePage {

  goals: Array<Task>;
  user: User;

  mySlideOptions = {
    pager: true
  };

  constructor(state:StateService ) {
    this.user = state.getUser()
    this.goals = this.user.tasks;
  }

  showConfirm(goal) {
    this.user.currentTask = goal;
    
  }

}
