import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeEditFormComponent } from './badge-edit-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BadgeEditFormComponent
  ],
  exports: [
    BadgeEditFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BadgeEditFormModule { }
