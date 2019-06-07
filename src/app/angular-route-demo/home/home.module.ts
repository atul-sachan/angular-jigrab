import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {SolutionComponent} from "../solution/solution.component";
import {AboutComponent} from "../about/about.component";

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children : [
      {path: 'solution', component: SolutionComponent},
      {path: 'about', component: AboutComponent},
      {path: '**', component: SolutionComponent},
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ],
  declarations: [
    HomeComponent,  
    SolutionComponent, 
    AboutComponent, 
  ],
  exports: [
    RouterModule,
    HomeComponent
  ]
})
export class HomeModule { }