import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cuento } from '../../shared/interfaces/cuento';
import { CuentosService } from '../../shared/services/cuentos/cuentos.service';

@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.component.html',
  styleUrls: ['./cuentos.component.scss']
})
export class CuentosComponent {
  cuentos: Cuento[] = [];

  constructor(private cuentosService:CuentosService,private router:Router){}

  ngOnInit(): void {
    this.cuentos=this.cuentosService.getCuentos();
  }

  selectCuento(cuento:Cuento){
    console.log(cuento);
    this.router.navigate(["scuento",cuento.id]);
  }
}
