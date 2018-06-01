import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscribtion: Subscription;
  customObsSubscribtion: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numbersObsSubscribtion = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First Package')
      }, 2000);
      setTimeout(() => {
        observer.next('Second Package')
      }, 4000);
      setTimeout(() => {
        observer.error('error')
      }, 5000);
    });
    this.customObsSubscribtion = myObservable.subscribe(
      (data: string) => {console.log(data)},
      (error: string) => {console.log(error)},
      () => {console.log('completed')}
    )
  }

  ngOnDestroy() {
    this.customObsSubscribtion.unsubscribe();
    this.numbersObsSubscribtion.unsubscribe();
  } 

}
