import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: '[appHoldable]',
})
export class HoldableDirective {
  @Output() holdTime: EventEmitter<number> = new EventEmitter();

  state: Subject<string> = new Subject();
  cancel: Observable<string>;

  constructor() {
    this.cancel = this.state.pipe(
      filter((v) => v === 'cancel'),
      tap((v) => {
        console.log('%c soltou', 'color: #ec6969; font-weight: bold');
        this.holdTime.emit(0);
      })
    );
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: any) {
    event.preventDefault();
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  @HostListener('touchleave', ['$event'])
  @HostListener('touchcancel', ['$event'])
  @HostListener('touchend', ['$event'])
  onExit() {
    this.state.next('cancel');
  }

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onHold() {
    console.log('%c pressionou', 'color: #5fba7d; font-weight: bold');
    this.state.next('start');

    const n = 100;
    interval(n)
      .pipe(
        takeUntil(this.cancel),
        tap((v) => {
          this.holdTime.emit(v * n);
        })
      )
      .subscribe();
  }
}
