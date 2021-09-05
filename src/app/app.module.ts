import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';
import { DemoComponent } from './Components/Demo.components';
import { DataBindingModule } from './DataBindingModule/DataBinding.Module';
import { DirectiveModule } from './DirectiveModule/Directive.module';

@NgModule({
  declarations: [
    AppComponent, // Noi chua component (moi component sinh ra phai co module chua no)
    DemoComponent,

  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule,
    DirectiveModule // Noi import cac module khac cua ung dung
  ],
  providers: [], // Noi khai bao cac service
  bootstrap: [AppComponent], // Noi khai bao cac chay tren index Component <app-root></app-root> duoc chay tren index
})
export class AppModule {}
