import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './RegisterFrom.component';

@NgModule({
  declarations: [RegisterFormComponent], // Chua cac component thuoc module nay
  imports: [CommonModule, FormsModule], // Noi import cac module khac cho ung dung
  exports: [RegisterFormComponent], // Ket qua can xuat ra (component, module) cua module nay (de module khac import vao)
})
export class RegisterFormModule {}
