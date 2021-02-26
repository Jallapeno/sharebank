import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavbarComponent {

  constructor() { }

  arrayMenu = [
    {'icon' : 'home', 'title' : 'Home', 'route' : '/'},
    {'icon' : 'trending_up', 'title' : 'My investments', 'route' : '/investments'},
    {'icon' : 'paid', 'title' : 'Buy shares', 'route' : '/shares'},
    {'icon' : 'account_circle', 'title' : 'Profile', 'route' : '/profile'},
  ]

}
