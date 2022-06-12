import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-parcelamento',
  templateUrl: './parcelamento.component.html',
  styleUrls: ['./parcelamento.component.scss'],
})
export class ParcelamentoComponent implements OnInit {

  private boletoInfo: any;
  parcelas: any = [];

  constructor(private router: Router, private _location: Location, private apiService: ApiService, private toastService: ToastrService) {}

  ngOnInit(): void {
    this.boletoInfo = localStorage.getItem('boletoData')
    this.boletoInfo = JSON.parse(this.boletoInfo)
    this.apiService.getInstallment(this.boletoInfo.value).subscribe({
      next: (next => {
        this.parcelas = next;
      }),
      error: (error => {
        this.toastService.error(error, "Algo deu errado");
      })
    })
    
  }

  selectInstament(item: any, installment: number) {
    console.log(item, installment)
    let inst = {
      value: item,
      installment,
      total: item.value * installment
    }
    localStorage.setItem('installment', JSON.stringify(inst))
    this.router.navigate(['conta-info/1']);
  }

  voltarPagina() {
    this._location.back();
  }
}
