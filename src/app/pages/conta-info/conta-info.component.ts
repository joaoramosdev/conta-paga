import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta-info',
  templateUrl: './conta-info.component.html',
  styleUrls: ['./conta-info.component.scss']
})
export class ContaInfoComponent implements OnInit {

  contaInfo = {
    valor_total: "",
    data_pagamento: "", 
    vencimento: "",
    beneficiario: "",
    multa: "",
    juros: "",
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(to: string) {
    this.router.navigate(['parcelamento'])
  }

}
