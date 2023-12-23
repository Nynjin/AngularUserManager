import { Component } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../../shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {
  name: String = '';
  email: String = '';
  password: String = '';
  occupation: String = '';
  bio: String = '';

  hide = true;

  constructor(
    private usersService: UsersService,
  ) { }

  onSubmit() {
    const userCreated = new User();
    const id = this.usersService.getMaxId();
    userCreated.name = this.name;
    userCreated.email = this.email;
    userCreated.password = this.password;
    userCreated.occupation = this.occupation;
    userCreated.bio = this.bio;
    this.usersService.addUser(userCreated);
  }
}
