import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { delay, tap } from 'rxjs/operators'

@Injectable()
export class LoginService {
  constructor() { }
  isLoginIn = false;
  redirectURL:string;

  login(): Observable<boolean> {
    return of(true).pipe(delay(1000), tap(val => this.isLoginIn = true));
  }
  loginOut() {
    this.isLoginIn = false;
  }

}