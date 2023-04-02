import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/modules/header/header.module';
import { HomeModule } from './shared/modules/home/home.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './pages/users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { UserCreateModule } from './pages/user-create/user-create.module';
import { UserEditModule } from './pages/user-edit/user-edit.module';
import { BadgesModule } from './pages/badges/badges.module';
import { LoaderComponent } from './pages/loader/loader.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoaderInterceptor} from "./shared/interceptors/loader.interceptor";


@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    AppRoutingModule,
    RouterModule,
    UsersModule,
    UserCreateModule,
    UserEditModule,
    HttpClientModule,
    BadgesModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
