import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'https://bchipmobilemobileappservice20190302074453.azurewebsites.net/api/Service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  registerUser(body): Observable<any> {
    return this.http.post(`${BASEURL}/CreateAccount/CreateAccount`, body);
  }
  LoginUser(body): Observable<any> {
    return this.http.post(`${BASEURL}/login`, body);
   }
   valPhoneNum(body): Observable<any> {
     return this.http.post(`${BASEURL}/ValidatePhoneNumber/ValidatePhoneNumber`, body);
   }
}
