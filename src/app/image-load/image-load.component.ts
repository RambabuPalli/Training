import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from './image-service.service';

@Component({
  selector: 'app-image-load',
  templateUrl: './image-load.component.html',
  styleUrls: ['./image-load.component.css']
})
export class ImageLoadComponent implements OnInit {

  image_array:{name:String,imgUrl:String}
  constructor(private img_service:ImageServiceService) {
    this.image_array=this.img_service.obj_1;
    console.log(this.image_array)

    setTimeout(() =>{
      this.image_array=this.img_service.obj_2;
      console.log(this.image_array)
   }, 30000);

   }

  ngOnInit(): void {
  }


}
