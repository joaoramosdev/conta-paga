import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-conta-info',
  templateUrl: './conta-info.component.html',
  styleUrls: ['./conta-info.component.scss'],
})
export class ContaInfoComponent implements OnInit {
  contaInfo = {
    valor_boleto: '',
    data_pagamento: '',
    vencimento: '',
    beneficiario: '',
    multa: 0,
    juros: 0,
    parcelas: 1,
    taxa_cartao: 0,
    taxa_parcelamento: 0,
    valor_total: 0
  };

  private boletoInfo: any;
  private installment: any;

  tipo: any = '0';

  constructor(
    private router: Router,
    private _Activatedroute: ActivatedRoute,
    private _location: Location,
    private apiService: ApiService
  ) {
    this.tipo = this._Activatedroute.snapshot.paramMap.get('tipo');
    this.boletoInfo = localStorage.getItem('boletoData')
    this.boletoInfo = JSON.parse(this.boletoInfo)

    this.contaInfo.valor_boleto = this.boletoInfo.value
    this.contaInfo.valor_total = this.boletoInfo.value
    this.contaInfo.data_pagamento = this.boletoInfo.payDueDate
    this.contaInfo.vencimento = this.boletoInfo.dueDateRegister
    this.contaInfo.beneficiario = this.boletoInfo.recipient
    this.contaInfo.multa = this.boletoInfo.assessment
    this.contaInfo.juros = this.boletoInfo.interestValueCalculated

    this.installment = localStorage.getItem('installment')
    if(this.installment) {
      this.installment = JSON.parse(this.installment);
      this.contaInfo.taxa_cartao = this.installment.total - parseFloat(this.contaInfo.valor_boleto);
      this.contaInfo.valor_total = this.installment.total;
      this.contaInfo.taxa_parcelamento = this.installment.value.tax
      this.contaInfo.parcelas = this.installment.installment
      
    }
  }

  ngOnInit(): void {}

  redirect(to: string) {
    if (this.tipo !== '0') this.router.navigate(['cartao']);
    else this.router.navigate(['parcelamento']);
  }

  voltarPagina() {
    this._location.back();
  }
}
