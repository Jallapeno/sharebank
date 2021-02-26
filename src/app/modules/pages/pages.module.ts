import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { InvestmentsComponent } from './investments/investments.component';
import { HomeComponent } from './home/home.component';
import { RescueComponent } from './rescue/rescue.component';



@NgModule({
  declarations: [InvestmentsComponent, HomeComponent, RescueComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
