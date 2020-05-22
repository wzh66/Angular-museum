import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class MenuService {

  private subject = new Subject<boolean>();

  constructor() {
  }

  show() {
    this.subject.next(true);
  }

  hide() {
    this.subject.next(false);
  }

  get(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
