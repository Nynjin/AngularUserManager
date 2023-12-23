import { Injectable } from '@angular/core';
import { User } from '../user-list/user.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userSelected = new BehaviorSubject<User>(null);
  usersBS = new BehaviorSubject<User[]>(null);

  constructor(
    private router: Router,
    private http: HttpService) {
    http
      .getUsers()
      .subscribe((users) => this.usersBS.next(users));
  }

  getUsers(): Observable<User[]> {
    const users = this.usersBS.getValue();
    return of(users);
  }

  selectUser(id: number) {
    const users = this.usersBS.getValue();
    let pos = users.findIndex((elt) => elt.id == id);
    if (pos != -1) {
      const userSelected = users[pos];
      this.userSelected.next(userSelected);
    }
    else {
      this.router.navigate(['home']);
    }
  }

  updateUserSelected(updatedUser: User) {
    const users = this.usersBS.getValue();
    let pos = users.findIndex(
      (elt) => elt.id == this.userSelected.getValue().id
    );
    users[pos] = updatedUser;
    this.usersBS.next(users);
    this.router.navigate(['home']);

    this.http.updateUser(updatedUser);
  }

  addUser(createdUser: User) {
    const users = this.usersBS.getValue();
    users.push(createdUser);
    this.usersBS.next(users);

    this.http.addUser(createdUser);

    this.router.navigate(['home']);
  }

  deleteUser(user: User) {
    const users = this.usersBS.getValue();
    let pos = users.findIndex(
      (elt) => elt.id == user.id
    );
    users.splice(pos, 1);
    this.usersBS.next(users);

    this.http.deleteUser(user.id);
  }

  getMaxId() {
    const maxUserId = this.usersBS.value.reduce((maxId, user) => (user.id > maxId ? user.id : maxId), 0);
    return maxUserId + 1;
  }
}
