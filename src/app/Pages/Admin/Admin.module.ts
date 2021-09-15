import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AntModule } from 'src/app/_core/Shared/AntModule/Antd.Module';
import { AdminTemplateComponent } from './AdminTemplate.component';

const adminRoutes: Routes = [
  { path: '', component: AdminTemplateComponent, children: [] },
];

@NgModule({
  declarations: [AdminTemplateComponent],
  imports: [
    FormsModule,
    CommonModule,
    AntModule,
    RouterModule.forChild(adminRoutes),
  ],
  exports: [],
})
export class AdminModule {}
