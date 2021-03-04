import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  now = new Date
  year
  constructor() { }

  ngOnInit(): void {
    this.year = this.now.getDay()
  }

}
