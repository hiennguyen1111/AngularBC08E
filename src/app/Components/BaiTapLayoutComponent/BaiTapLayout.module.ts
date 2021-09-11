import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTContentComponent } from './BTContent.component';
import { BTFooterComponent } from './BTFooter.component';
import { BTHeaderComponent } from './BTHeader.component';
import { BTSideBarComponent } from './BTSideBar.component';

@NgModule({
  declarations: [
    BaiTapLayoutComponent,
    BTHeaderComponent,
    BTSideBarComponent,
    BTContentComponent,
    BTFooterComponent,
  ], // Chua cac component thuoc module nay
  imports: [CommonModule], // Noi import cac module khac cho ung dung
  exports: [BaiTapLayoutComponent], // Ket qua can xuat ra (component, module) cua module nay (de module khac import vao)
})
export class BaiTapLayoutModule {}
