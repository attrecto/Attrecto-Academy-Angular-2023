import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeEditComponent } from './badge-edit.component';
import {BadgeEditFormModule} from "../../shared/modules/badge-edit-form/badge-edit-form.module";



@NgModule({
  declarations: [
    BadgeEditComponent
  ],
  imports: [
    CommonModule,
    BadgeEditFormModule
  ]
})
export class BadgeEditModule { }
