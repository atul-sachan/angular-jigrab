import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";
import {AdminComponent} from "../admin/admin.component";
import {DialogService} from "./dialog.service";

@Injectable()
export class AuthGuardService implements CanActivate,CanDeactivate<AdminComponent> {
  constructor(private loginService:LoginService, private dialogService:DialogService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("AuthGuard#canActived called...");
    const url: string = state.url;
    return this.checkLogin(url);
  }
  canDeactivate(component: AdminComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.dialogService.confirm("Are you sure you want to quit the administrator module?");
  }


  checkLogin(url:string) : boolean {
    if(this.loginService.isLoginIn) {
      return true;
    }

    this.loginService.redirectURL = url;
    this.router.navigate(['/login']);
    return false;
  }

}