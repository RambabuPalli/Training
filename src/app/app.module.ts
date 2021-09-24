import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckService } from './check.service';
import { HomeComponent } from './home/home.component';
import { TestService } from './test.service';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CustompipePipe } from './pipedemo/custompipe.pipe';
import { ImageModule } from './image-load/image/image.module';
import { LoginformsModule } from './forms/loginforms/loginforms.module';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { ChildComponent } from './component-interaction/child/child.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { MultimoduleModule } from './multi-component-interaction/multimodule/multimodule.module';
import { NgrxDemoComponent } from './Ngrx/ngrx-demo/ngrx-demo.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './Ngrx/ngrx-demo/counter.reducer';
import { HyperThemeComponent } from './hyper-theme/hyper-theme.component';
;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipedemoComponent,
    CustompipePipe,
    ParentComponent,
    ChildComponent,
    WeatherComponent,
    NgrxDemoComponent,
    HyperThemeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImageModule,
    LoginformsModule,
    HttpClientModule,
    MultimoduleModule,
    StoreModule.forRoot({ count: counterReducer })

  ],
  providers: [TestService,CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
