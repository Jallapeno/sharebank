import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  private header: HttpHeaders;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  currentUser() {
    return this.http.get<User>(`${environment.apiUrl}/profile`)
    .pipe(first()).subscribe(resp => {
        console.log(resp)
    });
  }

  register(user: User) {
      return this.http.post(`${environment.apiUrl}/users/create`, {
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password
      });
  }

}
