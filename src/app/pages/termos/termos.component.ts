import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.component.html',
  styleUrls: ['./termos.component.scss'],
})
export class TermosComponent implements OnInit {
  termsAccepted: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirect(to: any) {
    this.router.navigate([to]);
  }

  toggleChecked() {
    this.termsAccepted = !this.termsAccepted;
  }
}
