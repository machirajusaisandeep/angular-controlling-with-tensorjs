import { Component, OnInit,AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { HandGesture } from 'src/app/services/hand-gesture.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements AfterViewInit,OnDestroy {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  currentItem:any;
  selectedItem=[]
  isVideoOn:boolean=true;
  constructor(private _recognizer: HandGesture, ) {
   
  }
  get stream(): MediaStream {
    
    return this._recognizer.stream;
  }
  ngAfterViewInit(): void {
    this.turnOn();
    this._recognizer._gesture$.subscribe(value=>{
      console.log(value,'gesture obs');
      if(value === '1' || value ==='2'|| value ==='3'||value ==='4' ){
        this.currentItem=Number(value)
      }else if(value === 'ok'){
        this.selectedItem[this.currentItem]=true;
      }else if(value === 'cancel'){
        this.selectedItem[this.currentItem]=false;
      }
        
    }
    )
  }
  turnOn(){
    this._recognizer.initialize(
      this.canvas.nativeElement,
      this.video.nativeElement
    );
    this.isVideoOn=true;
  }
 ngOnDestroy(){
   this._recognizer.stopStreaming()
 }
 drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
}
}