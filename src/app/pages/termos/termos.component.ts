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

  phoneNumber: any;

  constructor(private router: Router, private _location: Location) {

  }

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

  onInputChange(event: any) {
    console.log('iameter')
    let newVal = event.replace(/\D/g, '');

    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,2})/, '($1)');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})/, '($1) $2 $3');
    } else if (newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/, '($1) $2 $3-$4');
    } else {
      newVal = newVal.substring(0, 10);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/, '($1) $2 $3-$4');
    }
    this.phoneNumber = newVal;
  }
}
