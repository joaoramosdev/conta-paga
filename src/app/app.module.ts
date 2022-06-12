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
import { CodigoBarrasComponent } from './pages/codigo-barras/codigo-barras.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoldableDirective } from './directives/holdable.directive';
import { MaterialModule } from './material.module';
import { FooterButtonsComponent } from './components/footer-buttons/footer-buttons.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    TermosComponent,
    CodigoBarrasComponent,
    HoldableDirective,
    FooterButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: 'toast-center-center',
      preventDuplicates: true,
      timeOut: 3000
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
