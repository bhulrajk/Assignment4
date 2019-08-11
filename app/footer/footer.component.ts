import { Component, OnInit, Input } from '@angular/core';
import { bhulrajk } from '../bhulrajk';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footInfo: bhulrajk;
  constructor() { }

  ngOnInit() {
  }

}
