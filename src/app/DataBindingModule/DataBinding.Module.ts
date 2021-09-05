import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DataBindingComponent } from "./DataBinding.component";

// Sd FormsModule cho 2waybinding
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations:[DataBindingComponent],
    imports: [CommonModule, FormsModule],
    exports: [DataBindingComponent],
})

export class DataBindingModule {}