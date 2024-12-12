import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type userdata } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true })
  user!: userdata;
  @Input({ required: true }) selected!: boolean;
  @Output() selectedUser = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onUserClicked() {
    this.selectedUser.emit(this.user.id);
  }
}
