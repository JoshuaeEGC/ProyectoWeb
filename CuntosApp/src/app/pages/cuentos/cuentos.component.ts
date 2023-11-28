import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cuento } from '../../shared/interfaces/cuento';
import { CuentosService } from '../../shared/services/cuentos/cuentos.service';
import { json } from 'body-parser';

@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.component.html',
  styleUrls: ['./cuentos.component.scss']
})
export class CuentosComponent {
  cuentos: any = [];

  filterCuento="";

  constructor(private cuentosService:CuentosService,private router:Router){}

  ngOnInit(): void {
    this.cuentosService.getCuentos().subscribe((response: any) => {
      this.cuentos = response;
      console.log("Cyentos ",this.cuentos);
    });
  }

  selectCuento(cuento:any){
    console.log(cuento);
    this.router.navigate(["scuento",cuento.uuid]);
  }

  deleteCuento(cuento:any){

  }
}
