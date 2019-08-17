import { LoginInfo } from './../Models/LoginInfo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { AppUrl } from "./Url";
@Injectable({
  providedIn: 'root'
})
export class LoginManagerService {
  public url=AppUrl;
  constructor(private http:HttpClient) { }

  public login(loginInfo:LoginInfo): Observable<any>{
 

    const httpOptions = {
      withCredentials: true,
    };

    return this.http.post(this.url.loginIn,loginInfo,httpOptions)
  }

  public getChaptchaKey(randomTimeSpan):Observable<any>{
 return this.http.get<Object>(this.url.captchaKey+randomTimeSpan );
  }

  public getChaptchaImage(keyValue):Observable<any>{
    return  this.http.get(this.url.captchaImg+keyValue, {responseType: 'text'});
  }

}
