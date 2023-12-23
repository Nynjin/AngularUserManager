import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../shared/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  userSelected: User = null;
  name: string;
  occupation: string;
  email: string;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.params['id'], 10);

    this.usersService.selectUser(id);

    this.usersService.userSelected.subscribe(
      (user) => (this.userSelected = user)
    );
  }
}
