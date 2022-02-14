import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.component.html',
  styleUrls: ['./termos.component.scss'],
})
export class TermosComponent implements OnInit {
  termsAccepted: boolean = false;

  constructor(private router: Router, private _location: Location) {}

  ngOnInit(): void {}

  redirect(to: any) {
    this.router.navigate([to]);
  }

  toggleChecked() {
    this.termsAccepted = !this.termsAccepted;
  }

  voltarPagina() {
    this._location.back();
  }
}
