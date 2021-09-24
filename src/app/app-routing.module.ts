import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { HomeComponent } from './home/home.component';
import { HyperThemeComponent } from './hyper-theme/hyper-theme.component';
import { ImageLoadComponent } from './image-load/image-load.component';
import { FirstComponent } from './multi-component-interaction/first/first.component';
import { NgrxDemoComponent } from './Ngrx/ngrx-demo/ngrx-demo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
{path :'Home',component:HomeComponent},
{path:'Pipes',component:PipedemoComponent},
{path:'Image-load',component:ImageLoadComponent},
{path:'TDF-forms',component:TemplateDrivenFormsComponent},
{path:'Reactive-forms',component:ReactiveFormsComponent},
{path:'Parent',component:ParentComponent},
{path:'Weather',component:WeatherComponent},
{path:'Multi-interaction',component:FirstComponent},
{path:'Ngrx-demo',component:NgrxDemoComponent},
{path:'Hyper-theme',component:HyperThemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
