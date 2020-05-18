import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
// import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomeComponent } from './home/home.component';
import { AddName } from './pipes/addName.pipe';


@NgModule({
  declarations: [
    AppComponent,
    //ListComponent,
    routingComponents,
    UserDetailsComponent,
    LoginComponent,
    HomeComponent,
    AddName
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
