import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cuento } from '../../shared/interfaces/cuento';
import { CuentosService } from '../../shared/services/cuentos/cuentos.service';

@Component({
  selector: 'app-scuento',
  templateUrl: './scuento.component.html',
  styleUrls: ['./scuento.component.scss']
})
export class ScuentoComponent {
  cuento:Cuento={
    id: "",
    foto: "",
    titulo: "",
    contenido: "",
    fecha:""
  };
  constructor(private cuentosService:CuentosService,private route: ActivatedRoute){}


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.cuento=this.cuentosService.getCuentos().find(c => c.id === params["id"])!;
    });
  }
}
