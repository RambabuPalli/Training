import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsComponent } from '../template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';





@NgModule({
  declarations: [
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    FormsModule

  ],
  exports:[
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
  ]
})
export class LoginformsModule { }
