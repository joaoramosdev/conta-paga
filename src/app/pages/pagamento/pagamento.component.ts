import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  constructor(private router: Router, private _location: Location) {}

  ngOnInit(): void {}

  redirect(to: string) {
    this.router.navigate([to]);
  }

  back() {
    window.history.back();
  }
}
