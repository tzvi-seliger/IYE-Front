import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.css']
})

export class NavitemComponent implements OnInit {
  @Input() navtext: string;
  constructor() { }
  ngOnInit() { }

}
