import { filter } from 'rxjs/operators';
import { Injectable, Pipe } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class MessagesService {
  private subject$ = new BehaviorSubject<string[]>([]);
  errors$: Observable<string[]> = this.subject$.asObservable()
    .pipe(
      filter(messages => messages && messages.length > 0),
    );

  constructor() {

  }

  showErrors(...errors: string[]) {
    this.subject$.next(errors);
  }

}
