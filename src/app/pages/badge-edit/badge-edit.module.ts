import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeEditFormModule } from 'src/app/shared/modules/badge-edit-form/badge-edit-form.module';
import { BadgeEditComponent } from './badge-edit.component';



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
