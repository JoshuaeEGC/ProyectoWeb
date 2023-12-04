import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { TokenService } from '../../shared/services/token/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router:Router,private tokenService:TokenService){}
  gotoHome(){
    this.router.navigateByUrl("");
  }
  gotoCuentos(){
    this.router.navigateByUrl("cuentos");
  }
  gotoGaleria(){
    this.router.navigateByUrl("gallery");
  }
  logout(){
    this.router.navigateByUrl("login");
    this.tokenService.remove();
  }
}
