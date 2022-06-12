import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.component.html',
  styleUrls: ['./termos.component.scss'],
})
export class TermosComponent implements OnInit {
  termsAccepted: boolean = false;
  failContact: boolean = false;

  phoneNumber: any = '';

  constructor(private router: Router, private _location: Location, private toastService: ToastrService) {

  }

  ngOnInit(): void {}

  redirect(to: any) {
    if(!this.termsAccepted) {
      this.toastService.warning('Para continuar é obrigatório que você concorde com os termos.', 'Atenção');
      return;
    }

    console.log(this.phoneNumber.trim().length)

    if(this.phoneNumber.length < 16) {
      this.toastService.warning('Preencha com um telefone válido', 'Atenção');
      return;
    }

    if(!this.failContact) {
      this.toastService.warning('Para continuar é obrigatório autorizar contato em caso de falha.', 'Atenção');
      return;
    }
    localStorage.setItem('phone', '+55' + this.phoneNumber.replace(/\D/g, ''))
    this.toastService.clear();
    this.router.navigate([to]);
  }

  toggleChecked() {
    this.termsAccepted = !this.termsAccepted;
  }

  voltarPagina() {
    this._location.back();
  }

  onInputChange(event: any) {
    let newVal = event.replace(/\D/g, '');

    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,2})/, '($1)');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})/, '($1) $2 $3');
    } else if (newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/, '($1) $2 $3-$4');
    } else if (newVal.length <= 14) {
      newVal = newVal.substring(0, 14);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,3})/, '($1) $2 $3-$4');
    } else {
      newVal = newVal.substring(0, 15);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/, '($1) $2 $4-$4');
    }
    this.phoneNumber = newVal;
  }
}
