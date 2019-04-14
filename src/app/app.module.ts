import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WindowService } from './window.service';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { ConfirmFieldsDirective } from './confirm-fields.directive';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ValidatePhoneComponent } from './validate-phone/validate-phone.component';

const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'phone', component: PhoneLoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'valPhone', component: ValidatePhoneComponent, pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    PhoneLoginComponent,
    HomeComponent,
    RegisterComponent,
    ConfirmFieldsDirective,
    NavBarComponent,
    ValidatePhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ WindowService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
