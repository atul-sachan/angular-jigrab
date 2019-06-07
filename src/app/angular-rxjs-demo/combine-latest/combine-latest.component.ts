import { Component, OnInit, OnDestroy } from '@angular/core';
import { mapTo, startWith, scan, tap, take, map, combineAll, takeUntil } from 'rxjs/operators';
import { fromEvent, interval, timer, combineLatest } from 'rxjs';
import { Subject, Observable } from 'rxjs'

@Component({
  selector: 'my-app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styles: []
})
export class CombineLatestComponent implements OnInit, OnDestroy  {
  private unsubscribe$ = new Subject<void>();
  constructor(){}
  ngOnInit(){
    this.exampleOne();
    this.exampleTwo();
    this.exampleThree();
  }

  exampleOne(){
    // timerOne emits first value at 1s, then once every 4s
    const timerOne$ = timer(1000, 4000).pipe(take(10));
    // timerTwo emits first value at 2s, then once every 4s
    const timerTwo$ = timer(2000, 4000).pipe(take(10));
    // timerThree emits first value at 3s, then once every 4s
    const timerThree$ = timer(3000, 4000).pipe(take(10));

    combineLatest(timerOne$, timerTwo$, timerThree$)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([timerValOne, timerValTwo, timerValThree]) => {
        /*
          Example:
        timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
        timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
        timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
      */
        console.log(
          `Timer One Latest: ${timerValOne},
          Timer Two Latest: ${timerValTwo},
          Timer Three Latest: ${timerValThree}`
        );
      }
    );
  }

  exampleTwo(){
    const timerOne$ = timer(1000, 4000).pipe(take(10));
    const timerTwo$ = timer(2000, 4000).pipe(take(10));
    const timerThree$ = timer(3000, 4000).pipe(take(10));

    // combineLatest also takes an optional projection function
    combineLatest(timerOne$, timerTwo$, timerThree$, (timerValOne, timerValTwo, timerValThree) => {
        /*
          Example:
        timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
        timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
        timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
      */
        return `Timer One Latest: ${timerValOne},Timer Two Latest: ${timerValTwo},Timer Three Latest: ${timerValThree}`
      })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(val => console.log(val));
  }

  exampleThree(){
    const redTotal = document.getElementById('red-total');
    const blackTotal = document.getElementById('black-total');
    const total = document.getElementById('total');

    const addOneClick$ = id => 
      fromEvent(document.getElementById(id),'click').pipe(
        mapTo(1),
        scan((acc,curr)=> acc+curr, 0),
        startWith(0)
      );
    

    combineLatest( addOneClick$('red'), addOneClick$('black'))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([red, black]: any)=>{
        redTotal.innerHTML = red;
        blackTotal.innerHTML = black;
        total.innerHTML = red + black;
      });
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}