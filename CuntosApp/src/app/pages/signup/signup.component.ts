import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form: FormGroup;
  
  constructor(formBuilder: FormBuilder,private router:Router){
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: [() => this.comparePasswords()]
    });
  };

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].errors && this.form.controls[controlName].errors![errorName];
  }
  
  comparePasswords() {
    if(!this.form) return null;

    const { password, confirm } = this.form.getRawValue();
    if (password === confirm) {
      return null;
    } else {
      return {
        match: true
      }
    }
  }

  signup() {
    console.log(this.form.value);
    this.router.navigateByUrl("login");
  }

}
