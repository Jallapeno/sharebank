import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// layout component
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
// templates components
import { FooterComponent } from './templates/footer/footer.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { HeaderComponent } from './templates/header/header.component';
// angular material
import { AngularMaterialModule } from './angular-material.module';
// interceptors
import { ErrorInterceptorService } from './shared/helpers/error-interceptor.service';
import { JwtInterceptorService } from './shared/helpers/jwt-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FullComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
