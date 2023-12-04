import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarcaCreateComponent } from "./marca-create/component/marca-create.component";
import { MarcaListComponent } from "./marca-list/marca-list.component";
import { MarcaEditComponent } from "./marca-edit/marca-edit.component";
import { MarcaDetailComponent } from "./marca-detail/marca-detail.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    MarcaCreateComponent,
    MarcaListComponent,
    MarcaEditComponent,
    MarcaDetailComponent,
  ],
  exports: [
    MarcaCreateComponent
  ],
})
export class MarcaModule {}