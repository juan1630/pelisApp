import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideShowBackdropComponent } from './slide-show-backdrop/slide-show-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    SlideShowBackdropComponent
  ],
  exports:[
    SlideShowBackdropComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
