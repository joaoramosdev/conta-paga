import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { ParcelamentoComponent } from './pages/parcelamento/parcelamento.component';
import { ContaInfoComponent } from './pages/conta-info/conta-info.component';
import { CartaoComponent } from './pages/cartao/cartao.component';
import { ConclusaoComponent } from './pages/conclusao/conclusao.component';
import { TermosComponent } from './pages/termos/termos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'parcelamento', component: ParcelamentoComponent },
  { path: 'conta-info', component: ContaInfoComponent },
  { path: 'cartao', component: CartaoComponent },
  { path: 'conclusao', component: ConclusaoComponent },
  { path: 'termos', component: TermosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
