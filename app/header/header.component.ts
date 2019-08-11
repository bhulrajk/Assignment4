import { Component, OnInit, Input } from '@angular/core';
import { bhulrajk } from '../bhulrajk';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerInfo: bhulrajk;
  constructor() { }

  ngOnInit() {
  }

}
