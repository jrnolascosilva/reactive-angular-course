import { concatMap, tap, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, concat, of } from 'rxjs';

@Injectable()
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false)
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() { }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null)
      .pipe(
        tap(() => this.loadinOn()),
        concatMap(() => obs$),
        finalize(() => this.loadingOff())
      );
  }

  loadinOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }

}
