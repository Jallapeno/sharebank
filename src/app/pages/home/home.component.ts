import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/shared/auth/auth.service';
import { UserService } from '@app/shared/services/user.service';
import { User } from '@app/core/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  
  constructor(
    private authService: AuthService,
    private userService: UserService
    ) {
    this.authService.user.subscribe(x => this.user = x)
  }

  ngOnInit(): void {
    this.userService.currentUser()
  }

}
