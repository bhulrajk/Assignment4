import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../animal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() dog: Dog;
  @Input() cat: Dog;
 

  constructor() { }

  ngOnInit() {
  }

}
