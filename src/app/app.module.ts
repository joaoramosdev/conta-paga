import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { ParcelamentoComponent } from './pages/parcelamento/parcelamento.component';
import { ContaInfoComponent } from './pages/conta-info/conta-info.component';
import { CartaoComponent } from './pages/cartao/cartao.component';
import { ConclusaoComponent } from './pages/conclusao/conclusao.component';
import { TermosComponent } from './pages/termos/termos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    PagamentoComponent,
    ParcelamentoComponent,
    ContaInfoComponent,
    CartaoComponent,
    ConclusaoComponent,
    TermosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
