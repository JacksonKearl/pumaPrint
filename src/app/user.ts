import { Task } from './task';
import { Goal } from './goal';

export class User {

  constructor(
    public name: string,
    public bio: string,

    public dpURL: string,
    public visualizationURL: string,

    public completedTasks: Array<Task>,

    public currentGoal: Goal,
    public currentTask: Task,

    public tasks: Array<Task>,
    public goals: Array<Goal>,

    public icons: Array<String>) {
  }

  getTotalPoints(): number {
    var total = 0;
    for (let task of this.completedTasks) {
      total += task.value;
    }
    return total;
  }

  getLifetimePoints(): number {
    var total = 0;
    for (let task of this.completedTasks) {
      if (task.value > 0) total += task.value;
    }
    return total;
  }
}