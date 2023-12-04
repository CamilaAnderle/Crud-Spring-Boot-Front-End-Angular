import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { MarcaCreateComponent } from './marca/marca-create/component/marca-create.component';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { MarcaEditComponent } from './marca/marca-edit/marca-edit.component';
import { MarcaDetailComponent } from './marca/marca-detail/marca-detail.component';
import { VeiculoCreateComponent } from './veiculo/veiculo-create/veiculo-create.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoEditComponent } from './veiculo/veiculo-edit/veiculo-edit.component';
import { VeiculoDetailComponent } from './veiculo/veiculo-detail/veiculo-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nova-marca',
    component: MarcaCreateComponent
  },
  {
    path: 'lista-marca',
    component: MarcaListComponent
  },
  {
    path: 'edit-marca/:id',
    component: MarcaEditComponent
  },
  {
  path: 'detail-marca/:id',
  component: MarcaDetailComponent
  },
  {
    path: 'novo-veiculo',
    component: VeiculoCreateComponent
  },
  {
    path: 'lista-veiculo',
    component: VeiculoListComponent
  },
  {
    path: 'edit-veiculo/:id',
    component: VeiculoEditComponent
  },
  {
    path: 'detail-veiculo/:id',
    component: VeiculoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }