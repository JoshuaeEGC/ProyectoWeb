import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login( data: any ): Observable<any> {
    const response = this.httpClient.post("https://api-web-m5lb.onrender.com/user/login", data)
    //console.log(url);
    return response;
  }
  
  register( data: any ): Observable<any> {
    const response = this.httpClient.post("https://api-web-m5lb.onrender.com/user", data)
    return response;
  }

}
