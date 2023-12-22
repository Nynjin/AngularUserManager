import { Component } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../shared/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.scss'
})
export class UserUpdateComponent {
  userSelected: User = null;
  name: String = '';
  email: String = '';
  password: String = '';
  occupation: String = '';
  bio: String = '';

  hide = true;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.params['id'], 10);

    this.usersService.selectUser(id);

    this.usersService.userSelected.subscribe(
      (user) => (this.userSelected = user)
    );

    this.name = this.userSelected.name;
    this.email = this.userSelected.email;
    this.password = this.userSelected.password;
    this.occupation = this.userSelected.occupation;
    this.bio = this.userSelected.bio;
  }

  onSubmit() {
    const updatedUser = new User();
    updatedUser.id = this.userSelected.id;
    updatedUser.name = this.name;
    updatedUser.email = this.email; // email validator
    updatedUser.password = this.password; // hash password
    updatedUser.occupation = this.occupation;
    updatedUser.bio = this.bio;
    this.usersService.updateUserSelected(updatedUser);
  }
}
