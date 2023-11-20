import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router:Router){}
  gotoHome(){
    this.router.navigateByUrl("home");
  }
  gotoCuentos(){
    this.router.navigateByUrl("cuentos");
  }
  gotoGaleria(){
    this.router.navigateByUrl("gallery");
  }
  logout(){
    this.router.navigateByUrl("login");
  }
}
