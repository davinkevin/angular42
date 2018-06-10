import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'angular-elements-event',
  template: `
    <p>Angular-Elements @</p>
    <p (click)="emit()">{{ eventName + ' ' + year }}</p>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class AngularElementsEvent {
  year = 2018;

  @Input() eventName : string = 'No label...';
  @Output() action = new EventEmitter<string>();

  emit() {
    this.action.emit(this.eventName + ' ' + this.year);
    this.year += 1;
  }
}
