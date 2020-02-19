import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  routes: any = ['03/13/2017', '02/12/1988'];
  constructor() {}

  ngOnInit() {}
}
