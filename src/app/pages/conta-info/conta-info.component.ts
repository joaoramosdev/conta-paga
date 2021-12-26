import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-info',
  templateUrl: './conta-info.component.html',
  styleUrls: ['./conta-info.component.scss']
})
export class ContaInfoComponent implements OnInit {

  contaInfo = {
    valor_total: "100,00",
    data_pagamento: "20/12/2021",
    vencimento: "21/12/2021",
    beneficiario: "PAYU BR INTERMED",
    multa: "0,00",
    juros: "0,00",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
