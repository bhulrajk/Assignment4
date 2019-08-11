import { Component } from '@angular/core';
import { bhulrajk } from './bhulrajk';
import {Dog} from './animal';
import dog from '../assets/data/dog.json';
import cat from '../assets/data/cat.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bhulrajkA4';

  myinfo: 'bhulrajk';
  dList: Dog[] = dog.dog;
  cList: Dog[] = cat.cat;
}
