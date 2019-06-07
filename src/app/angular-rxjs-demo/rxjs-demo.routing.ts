import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RxjsDemoComponent } from './rxjs-demo.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';

const rxjsDemoRoutes: Routes = [
  { path: 'e2', component: RxjsDemoComponent, children:[
    // { path: '', component: CombineAllComponent },
    { path: 'combine-all', component: CombineAllComponent },
    { path: 'combine-latest', component: CombineLatestComponent },
    { path: 'concat', component: ConcatComponent },
    { path: 'concat-all', component: ConcatAllComponent }
  ]}
];

@NgModule({
    imports: [RouterModule.forChild(rxjsDemoRoutes)],
    exports: [RouterModule]
})
export class RxjsDemoRoutingModule { }