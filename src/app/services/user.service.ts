import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, range} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import { User } from '../models/User';
@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor( private http: HttpClient ) { }
    getUser(username: any, password: any): Observable<User> {
        return this.http.get<User>(`https://localhost:44386/api/user/${username}/${password}`);
    }

    getImage(): Observable<any> {
      return this.http.get(`https://localhost:44386/api/user/getImage`);
  }
}
