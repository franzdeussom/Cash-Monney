import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsersComponent } from './login-users/login-users.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { InformationsComponent } from './informations/informations.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { OperationsComponent } from './accoutmanager/operations/operations.component';
import { MessageComponent } from './message/message.component';

export const path: Routes = [
  {
    path:'home',
    component : HomeComponent
  },
  {
    path: 'login',
    component : LoginUsersComponent
  },
  {
    path: 'operations',
    component: OperationsComponent
  },
  {
    path: 'informations',
    component: InformationsComponent
  },
  {
    path: 'register',
    component : RegisterComponent
  },
  {
    path: 'admin',
    component: AdminTemplateComponent
  },
  {
    path: 'adminlogin',
    component: AdminLoginComponent
  }, 
  {
    path: '**',
    redirectTo: 'home'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginUsersComponent,
    RegisterComponent,
    HomeComponent,
    InformationsComponent,
    AdminLoginComponent,
    AdminTemplateComponent,
    OperationsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(path)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
