import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoadComponent } from '../image-load.component';
import { ImageServiceService } from '../image-service.service';




@NgModule({
  declarations: [
    ImageLoadComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImageLoadComponent
  ],
  providers:[
    ImageServiceService
  ]
})
export class ImageModule { }
