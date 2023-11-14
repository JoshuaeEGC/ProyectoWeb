import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  http: any;

  form: FormGroup;
  
  constructor(private httpClient: HttpClient,formBuilder: FormBuilder,private router:Router){
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  };

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].errors && this.form.controls[controlName].errors![errorName];
  }

  login() {
    console.log(this.form.value);
    this.router.navigateByUrl("home");
  }
  signup(){
    this.router.navigateByUrl("signup");
  }

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

