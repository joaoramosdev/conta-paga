import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  tipo: any = '0';

  constructor(private router: Router, private _Activatedroute: ActivatedRoute) {
    this.tipo = this._Activatedroute.snapshot.paramMap.get('tipo');
   }

  ngOnInit(): void {
  }

  redirect(to: string) {
    if(this.tipo !== '0')
      this.router.navigate(['cartao'])
    else
      this.router.navigate(['parcelamento'])
  }

}
