import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VeiculoCreateComponent } from './veiculo-create/veiculo-create.component';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { VeiculoEditComponent } from './veiculo-edit/veiculo-edit.component';
import { VeiculoDetailComponent } from './veiculo-detail/veiculo-detail.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    VeiculoCreateComponent,
    VeiculoListComponent,
    VeiculoEditComponent,
    VeiculoDetailComponent
    ]
})
export class VeiculoModule { }
