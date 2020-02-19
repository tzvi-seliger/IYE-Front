import { Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
    const source$: Observable<number> = range(0, 10);
    source$
      .pipe(
        map(x => x * 3),
        filter(x => x % 2 === 0)
      )
      .subscribe(x => console.log(x));
  }
}
