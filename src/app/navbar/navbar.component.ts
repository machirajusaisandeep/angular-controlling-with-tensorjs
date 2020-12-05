import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { HandGesture } from '../services/hand-gesture.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    opened$ = this._recognizer.swipe$.pipe(
      filter((value) => value === 'left' || value === 'right'),
      map((value) => value === 'right')
    );

    
  constructor(private breakpointObserver: BreakpointObserver,private _recognizer: HandGesture) {}

  ngOnInit(){
   
  }

}
