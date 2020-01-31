import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideShowBackdropComponent } from './slide-show-backdrop/slide-show-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideShowPosterComponent } from './slide-show-poster/slide-show-poster.component';
import { SlideShowsParesComponent } from './slide-shows-pares/slide-shows-pares.component';


@NgModule({
  declarations: [
    SlideShowBackdropComponent,
    SlideShowPosterComponent,
    SlideShowsParesComponent
  ],
  exports:[
    SlideShowBackdropComponent,
    SlideShowPosterComponent,
    SlideShowsParesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
