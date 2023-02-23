import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/modules/header/header.module';
import { HomeModule } from './shared/modules/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
