import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { ThirdComponent } from '../third/third.component';

import { MultiserviceService } from '../multiservice.service';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    FirstComponent,
    SecondComponent,
    ThirdComponent,

  ],
  providers:[
    MultiserviceService
  ]
})
export class MultimoduleModule { }
