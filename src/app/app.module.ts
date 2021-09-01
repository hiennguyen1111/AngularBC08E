import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './Components/Demo.components'; 


@NgModule({
  declarations: [
    AppComponent, // Noi chua component (moi component sinh ra phai co module chua no)
    DemoComponent 
  ],
  imports: [
    BrowserModule, // Noi import cac module cua ung dung
  ],
  providers: [], // Noi khai bao cac service
  bootstrap: [AppComponent] // Noi khai bao cac chay tren index Component <app-root></app-root> duoc chay tren index
})
export class AppModule { }
