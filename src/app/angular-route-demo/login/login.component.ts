import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }
  message:string;
  ngOnInit() {
    this.setMessage();
  }
  setMessage() {
    this.message = "Logged"+ this.loginService.isLoginIn ? 'In':'Out';
  }
  toLogin() {
     this.message = "Try to login..."
     this.loginService.login().subscribe(()=> {
       this.setMessage();
       if(this.loginService.isLoginIn) {
         const redirectUrl = this.loginService.redirectURL ? this.loginService.redirectURL : '/admin';
         this.router.navigate([redirectUrl]);
       }
     });
  }
}