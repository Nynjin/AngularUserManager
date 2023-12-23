import { Injectable } from '@angular/core';
import { User } from '../user-list/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private httpClient: HttpClient) { }

    baseUrl = 'https://6585e91e45407f8ffc6e1396.mockapi.io/users';

    public getUsers(): Observable<User[]> {
        const users = this.httpClient.get<User[]>(this.baseUrl);
        console.log(users);
        users.subscribe();
        return users;
    }

    public getUser(id: number): Observable<User> {
        const user = this.httpClient.get<User>(`${this.baseUrl}/${id.toString()}`);
        user.subscribe();
        return user;
    }

    public addUser(user: User) {
        const req = this.httpClient.post<User>(`${this.baseUrl}`, user);
        req.subscribe();
    }

    public deleteUser(id: number) {
        const req = this.httpClient.delete<User>(`${this.baseUrl}/${id.toString()}`);
        req.subscribe();
    }

    public updateUser(user: User) {
        const req = this.httpClient.put<User>(`${this.baseUrl}/${user.id.toString()}`, user);
        req.subscribe();
    }
}