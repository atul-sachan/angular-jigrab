import { Component, OnInit, OnDestroy } from '@angular/core';
import { take, map, combineAll, takeUntil, delay  } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Subject, Observable, of, concat } from 'rxjs';

@Component({
  selector: 'my-app-concat',
  templateUrl: './concat.component.html',
  styleUrls: [  ]
})
export class ConcatComponent implements OnInit, OnDestroy  {
  private unsubscribe$ = new Subject<void>();
  
  constructor(){}
  ngOnInit(){
    this.exampleOne();
    this.exampleTwo();
    this.exampleThree();
  }

  //Example 1: Basic concat usage with three observables
  exampleOne(){
    const concat$ = concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9))
    concat$.pipe(takeUntil(this.unsubscribe$))
      .subscribe(val => console.log(val));
  }

  //Example 2: concat with delayed observable
  exampleTwo(){
    const concat$ = concat(of(10, 20, 30).pipe(delay(5000)), of(40, 50, 60), of(70, 80, 90))
    concat$.pipe(takeUntil(this.unsubscribe$))
      .subscribe(val => console.log(val));
  }

  //Example 3: (Warning!) concat with source that does not complete
  exampleThree(){
    const concat$ = concat(interval(1000), of('This', 'Never', 'Runs'))
    concat$.pipe(takeUntil(this.unsubscribe$))
      .subscribe(val => console.log(val));
  }

  ngOnDestroy(){
    console.log('Destroy');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}