import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss'],
})
export class CartaoComponent implements OnInit {
  constructor(private router: Router, private _location: Location) {
    setTimeout(() => {
      this.router.navigate(['conclusao']);
    }, 5000);
  }

  ngOnInit(): void {}

  voltarPagina() {
    this._location.back();
  }
}
