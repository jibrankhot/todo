import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  standalone: true,

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserID: string | undefined;

  get selectedUserList() {
    return this.users.find(
      (singleUser) => singleUser.id === this.selectedUserID
    )!;
  }

  onSelectedUser(selectedUserid: string) {
    this.selectedUserID = selectedUserid;
  }
}
