import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
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
