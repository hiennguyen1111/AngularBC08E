import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveUIComponent } from './DirectiveUI.component';

import { AntModule } from '../_core/Shared/AntModule/Antd.Module';
import { MaterialModule } from '../_core/Shared/MaterialModule/Material.module';

@NgModule({
    declarations: [DirectiveUIComponent],
    imports: [CommonModule,FormsModule,AntModule,MaterialModule],
    exports: [DirectiveUIComponent],
})
export class DirectiveUIModule { }