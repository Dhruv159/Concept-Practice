import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Output() childSearchTrigger = new EventEmitter<string>();

  private subject = new Subject<string>();

  constructor() {
    this.subject.pipe(debounceTime(1000)).subscribe({
      next: (response) => { this.childSearchTrigger.emit(response)}
    });
  }

  onInputChange($event: any): void {
    this.subject.next($event.target.value);
  }
}
