import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProgressBarService {
  private readonly isVisibleSubject = new BehaviorSubject<boolean>(false);
  public readonly visible$ = this.isVisibleSubject.asObservable();

  public show() {
    this.isVisibleSubject.next(true);
  }

  public hide() {
    this.isVisibleSubject.next(false);
  }
}
