import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  visibleUsers:any;
  columnsToDisplay: string[] = ['name', 'occupation', 'email', 'details', 'update', 'delete'];

  length = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25, 50];
  pageEvent: PageEvent = new PageEvent;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData = () => {
    this.usersService
      .getUsers()
      .subscribe((users) => (this.users = users));

    this.visibleUsers = new MatTableDataSource(this.users);
    this.length = this.users.length;
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    let begin = this.pageIndex*this.pageSize;
    begin = (begin > 0 && begin < this.length) ? begin : 0;

    let end = begin + this.pageSize;
    end = (end > 0 && end < this.length) ? end : this.length;

    this.visibleUsers = this.users.slice(begin, end);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.visibleUsers.filter = filterValue.trim().toLowerCase();
  }
}
