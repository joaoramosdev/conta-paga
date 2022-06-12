import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }
  
  public getBoletoInfo(value: string) {
    value = value.replace(/[^0-9\.]+/g, '');
    console.log('url', this.url + `/boleto/${value}`)
    return this.http.get(this.url + `/boleto/${value}`)
  }

  public getInstallment(value: string) {
    console.log('url', this.url + `/installment/${value}`)
    return this.http.get(this.url + `/installment/${value}`)
  }
  
}
