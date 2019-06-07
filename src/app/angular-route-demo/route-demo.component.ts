import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'my-app-route-demo',
  templateUrl: './route-demo.component.html',
  styleUrls: [ './route-demo.component.css' ]
})
export class RouteDemoComponent  {
  constructor(private router: Router, private route: ActivatedRoute) { }
  public startChat() {
    this.router.navigate([{ outlets: {  auxi: ['chat'] } }] ,{relativeTo:this.route})
  }
  public endChat() {
    this.router.navigate([{ outlets: {  auxi: null } }],{relativeTo:this.route} )
  }
}