import { Component, OnInit, OnDestroy } from '@angular/core';
import { take, map, combineAll, takeUntil, delay, concatAll, concat } from 'rxjs/operators';
import { Subject, Observable, of, interval } from 'rxjs';

@Component({
  selector: 'my-app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: [  ]
})
export class ConcatAllComponent implements OnInit, OnDestroy  {
  private unsubscribe$ = new Subject<void>();
  
  constructor(){}
  ngOnInit(){
    //this.exampleOne();
    this.exampleTwo();
    this.exampleThree();
  }

  //Example : concat as operators 
  exampleOne(){
    const source = of(1, 2, 3);
    const example = source.pipe(concat(of(4,5,6), of(10,20,30)));
    example.pipe(takeUntil(this.unsubscribe$))
      .subscribe(val => console.log(val));
  }

  //Example 1: concatAll with observable
  exampleTwo(){
    const source$ = interval(5000);
    const example$ = source$.pipe(map(val=> of(val+10)),concatAll());
    example$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(val=> console.log('Example with Basic observable:',val));
  }

  //Example 2: concatAll with promise
  exampleThree(){
    const samplePromise = val => new Promise(resolve => resolve(val));
    const source = interval(2000);
    const example = source.pipe(
      map(val=>samplePromise(val)),
      concatAll()
    );
    example.pipe(takeUntil(this.unsubscribe$)).subscribe(val=> console.log('Example With Promise:',val));
  }

  ngOnDestroy(){
    console.log('Destroy');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}