import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InvestmentsComponent } from './investments/investments.component';
import { HomeComponent } from './home/home.component';
import { RescueComponent } from './rescue/rescue.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// angular material
import { AngularMaterialModule } from '../angular-material.module';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [
    InvestmentsComponent, 
    HomeComponent, 
    RescueComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class PagesModule { }
