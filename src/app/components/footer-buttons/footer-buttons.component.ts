import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.scss']
})
export class FooterButtonsComponent implements OnInit {

  @Input() to: string | undefined;

  constructor(
    private router: Router,
    private _location: Location) { }

  ngOnInit(): void {
  }

  voltarPagina() {
    this._location.back();
  }


  redirect() {
    this.router.navigate([this.to]);
  }


}
