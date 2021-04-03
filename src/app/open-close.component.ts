import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {trigger, transition, state, animate, style, AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.css'],
  animations: [
    trigger('fade', [
      // ...
      state('in', style({
        height: '200px',
        opacity: 1,
      })),
      state('out', style({
        height: '200px',
        opacity: 0,
      })),
      transition('in => out', [
        animate('300ms')
      ]),
      transition('out => in', [
        animate('300ms')
      ]),
    ]),
  ],
})
export class OpenCloseComponent implements OnInit, OnDestroy {
  @Input() logging = false;
  fadeState = true;
  content = true;

  timeout: any;

  toggle() {
    this.fadeState = !this.fadeState;

    this.timeout = setTimeout(() => {
      this.fadeState = !this.fadeState;
      this.content = !this.content;
    }, 300);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }
}
