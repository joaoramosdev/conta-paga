import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conclusao',
  templateUrl: './conclusao.component.html',
  styleUrls: ['./conclusao.component.scss']
})
export class ConclusaoComponent implements OnInit {

  constructor(private router: Router) { 
    setTimeout(() => {this.router.navigate(['termos'])}, 5000)
  }

  ngOnInit(): void {
  }

}
