import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('token')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username, password) {
    return this.http.post<User>(`${environment.apiUrl}/authenticate`, { username, password })
      .pipe(map(token => {
            localStorage.setItem('token', JSON.stringify(token));
            this.userSubject.next(token);
            return token;
        })
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.router.navigate(['/authenticate']);
  }

}
