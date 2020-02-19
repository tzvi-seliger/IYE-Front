import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, range, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedIn = false;
  user: any;
  constructor(private http: HttpClient) {}
  private AuthorizeUser(username: any, password: any): Observable<User> {
    return this.http.get<User>(
      `https://localhost:44386/api/user/${username}/${password}`
    );
  }

  logIn(un, pw) {
    this.AuthorizeUser(un, pw).subscribe({
        next: user => {
          this.user = user;
          console.log(this.user.userName);
          this.isloggedIn = this.user.userName === un;
        }
      });
  }

//   verifyLoggedIn(un): boolean {
//       this.isloggedIn = this.user.userName === un;
//       return this.user.userName === un;
//   }

  logoutUser() {
    this.user = '';
    this.isloggedIn = false;
  }
}
