import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeEditFormModule } from 'src/app/shared/modules/badge-edit-form/badge-edit-form.module';
import { BadgeCreateComponent } from './badge-create.component';



@NgModule({
  declarations: [
    BadgeCreateComponent
  ],
  imports: [
    CommonModule,
    BadgeEditFormModule
  ]
})
export class BadgeCreateModule { }
