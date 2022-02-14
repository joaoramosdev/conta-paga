import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  constructor(private router: Router, private _location: Location) {}

  ngOnInit(): void {}

  redirect(to: string) {
    switch (to) {
      case 'boleto':
        this.router.navigate(['pagamento']);
        break;
    }
  }

  voltarPagina() {
    this._location.back();
  }
}
