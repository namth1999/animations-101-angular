import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {trigger, transition, state, animate, style, AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
      })),
      state('closed', style({
        height: '200px',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('300ms')
      ]),
      transition('closed => open', [
        animate('300ms')
      ]),
    ]),
  ],
})
export class OpenCloseComponent implements OnInit, OnDestroy {
  @Input() logging = false;
  isOpen = true;
  tenten = true;

  timeout: any;

  toggle() {
    this.isOpen = !this.isOpen;

    this.timeout = setTimeout(() => {
      this.isOpen = !this.isOpen;
      this.tenten = !this.tenten;
    }, 300);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearInterval(this.timeout);
  }
}
