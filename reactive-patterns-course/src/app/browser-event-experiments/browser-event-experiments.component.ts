import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {
  hoverSection: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');

    this.hoverSection.addEventListener(`mousemove`, onMouseMove );
  }

  unsubscribe() {
    console.log(`Called Unsubscribe()`);
    this.hoverSection.removeEventListener(`mousemove`, onMouseMove );
  }

  subscribe() {
    console.log(`Called Subscribe()`);
    this.hoverSection.addEventListener(`mousemove`, onMouseMove );
  }
}

function onMouseMove(ev) {
  console.log(ev);
}
