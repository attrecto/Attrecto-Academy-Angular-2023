import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/modules/header/header.module';
import { HomeModule } from './shared/modules/home/home.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './pages/users/users.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserCreateModule } from './pages/user-create/user-create.module';
import { UserEditModule } from './pages/user-edit/user-edit.module';
import { BadgesModule } from './pages/badges/badges.module';
import { LoadPageComponent } from './pages/load-page/load-page.component';
import { LoaderInterceptorInterceptor } from './shared/loader/loader-interceptor.interceptor';

@NgModule({
  declarations: [AppComponent, LoadPageComponent],
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
    BadgesModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
