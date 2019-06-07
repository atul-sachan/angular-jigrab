import { Component, OnInit, OnDestroy } from '@angular/core';
import { take, map, combineAll, takeUntil } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Subject, Observable } from 'rxjs'

@Component({
  selector: 'my-app-combine-all',
  template: '<h6>Combine All</h6>',
  styleUrls: [  ]
})
export class CombineAllComponent implements OnInit, OnDestroy  {
  private unsubscribe$ = new Subject<void>();
  public source: Observable<any>;
  public example: Observable<any>;
  constructor(){}
  ngOnInit(){
    this.source = interval(4000).pipe(take(2));
    this.source
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(val=> console.log("source:" + val));
      
    this.example = this.source.pipe(
      map(val=>
        interval(10000).pipe(
          map(i => `Result(${val}): ${i}`),
          take(3)
        )
      )
    );
    const combined = this.example.pipe(combineAll());
    combined
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(val => console.log(val));
  }

  ngOnDestroy(){
    console.log('Destroy');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}