import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {
  @Input() inputContent: string;
  constructor() { }

  ngOnInit() {
  }

}
