import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerComponent } from './controller/controller.component';
import { BlurBackgroundComponent } from './blur-background/blur-background.component';
import { RouterModule, Routes } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {  MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'',
        component:ControllerComponent
      }, {
        path:'blur',
        component:BlurBackgroundComponent
      },
      {
        path:'**',
        pathMatch:'full',
        redirectTo:''
      }
    ]
  },
];

@NgModule({
  declarations: [ControllerComponent, BlurBackgroundComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),DragDropModule,MatIconModule,MatButtonModule,MatCheckboxModule
  ]
})
export class UtilKitModule { }
