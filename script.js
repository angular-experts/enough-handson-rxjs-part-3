// Enough Handson - RxJS
// Part 3


// Data stream from a "intervals"
console.log('----------Streams from Interval, Timer & Range -------------');

console.log('----------Streams from Interval (no stopping)---------------');

const interval$ = Rx.Observable.interval(50);

interval$.subscribe(
  value => {
    console.log('Interval 1:',value);
  },
  error => {
    console.log(error);
  },
  complete =>{
    console.log(complete);
  }
);

console.log('----------Streams from Interval (with a stop)---------------');

const anotherInterval$ = Rx.Observable.interval(50)
                                .take(5);

anotherInterval$.subscribe(
  value => {
    console.log('Interval 2:',value);
  },
  error => {
    console.log(error);
  },
  complete =>{
    console.log(complete);
  }
);


// Data stream from a "timers"
console.log('----------Streams from Timers (Basic)-------------');

const timer$ = Rx.Observable.timer(2000); // in ms

timer$.subscribe(
  value => {
    console.log('Timer 1:',value);
  },
  error => {
    console.log(error);
  },
  complete =>{
    console.log(complete);
  }
);

console.log('----------Streams from Timers ( Timers as Intervals)-------------');

const startAfter = 5000; //ms
const intervalBetweenEach = 3000; // ms
const timerAsInterval$ = Rx.Observable.timer(startAfter, intervalBetweenEach); // in ms

timerAsInterval$.subscribe(
  value => {
    console.log('Timer 2:',value);
  },
  error => {
    console.log(error);
  },
  complete =>{
    console.log(complete);
  }
);

console.log('----------Streams from Timers ( Timers as Intervals + Stop) -------------');

const timerAsIntervalWithStop$ = Rx.Observable.timer(startAfter, intervalBetweenEach)
                                                .take(3);

timerAsIntervalWithStop$.subscribe(
  value => {
    console.log('Timer 3:', value);
  },
  error => {
    console.log(error);
  },
  complete => {
    console.log(complete);
  }
);

console.log('----------------------------Streams from Range---------------------------');

// Range spits out all at once

const startingPoint = 10;
const numberOfItemsInRange = 15;
const range$ = Rx.Observable.range( startingPoint, numberOfItemsInRange);

range$.subscribe(
  value => {
    console.log('Range 1:' + value);
  },
  errror => {
    console.log(errror);
  },
  complete => {
    console.log(complete);
  }
);

console.log('----------------Streams from Range( With a filter of even only)---------------------------');

const rangeWithFilter$ = Rx.Observable.range( startingPoint, numberOfItemsInRange)
                                      .filter(v => v%2 ===0);

rangeWithFilter$.subscribe(
  value => {
    console.log('Range 2:' + value);
  },
  errror => {
    console.log(errror);
  },
  complete => {
    console.log(complete);
  }
);