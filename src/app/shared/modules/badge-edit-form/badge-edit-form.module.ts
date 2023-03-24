import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BadgeEditFormComponent } from './badge-edit-form.component';

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
