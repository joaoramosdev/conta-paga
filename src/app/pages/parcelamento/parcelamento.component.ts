import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parcelamento',
  templateUrl: './parcelamento.component.html',
  styleUrls: ['./parcelamento.component.scss']
})
export class ParcelamentoComponent implements OnInit {
  parcelas: Array<any> = [
    "1x R$100,00",
    "2x R$100,00",
    "3x R$100,00",
    "4x R$100,00",
    "5x R$100,00",
    "6x R$100,00",
    "7x R$100,00",
    "8x R$100,00",
    "9x R$100,00",
    "10x R$100,00",
    "11x R$100,00",
    "12x R$100,00",
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(to: string) {
    this.router.navigate(['conta-info/1'])
  }

}
