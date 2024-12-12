import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  isAddedNewTask = false;
  @Input({ required: true }) selecteduserid!: string;
  @Input({ required: true }) selectedusername!: string;
  constructor(private taskService: TaskService) {}

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.selecteduserid);
  }

  onAddNewTask() {
    this.isAddedNewTask = true;
  }

  onCloseAddTask() {
    this.isAddedNewTask = false;
  }
}
