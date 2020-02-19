import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contents: string[] = [
    'Thanks',
    'Address Info',
    'Popular',
    'Logo',
    'Random'
  ];
  constructor() {}

  ngOnInit() {}
}
