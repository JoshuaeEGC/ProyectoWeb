import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  http: any;

    constructor(private httpClient: HttpClient){};

    msg = '';
    data: any;

    onInit(): Observable<any> {
      const url: string ='http://localhost:3000/';
      return this.httpClient.get<any>(url);
    }


    getUser(): void {
      this.onInit().subscribe((response: any) => {
      this.msg = response;
    });
    }

    getData() {
        this.http.get('http://localhost:3000/').subscribe(
          (response: any) => {
            this.data = response;
          },
          (error: any) => {
            console.error('Error al obtener datos:', error);
          }
        );
      };
}
function getData() {
  throw new Error('Function not implemented.');
}

