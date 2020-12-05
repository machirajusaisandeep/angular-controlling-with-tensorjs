import { Component, OnInit } from '@angular/core';
import { init } from 'src/app/services/blur';


@Component({
  selector: 'app-blur-background',
  templateUrl: './blur-background.component.html',
  styleUrls: ['./blur-background.component.css']
})
export class BlurBackgroundComponent implements OnInit {
  ngOnInit(): void {
    init()
  }
  constructor( ) {
  }
}
