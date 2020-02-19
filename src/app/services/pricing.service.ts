// import { Observable, range } from 'rxjs';
// import { map, filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PricingService {
  constructor() {}
  GetPricingData() {
    return [
      {
        name: '15 employee accounts included',
        inBasic: true,
        inStandard: true,
        inPremium: true
      },
      {
        name: '40 employee accounts included',
        inBasic: false,
        inStandard: true,
        inPremium: true
      },
      {
        name: '100 employee accounts included',
        inBasic: false,
        inStandard: false,
        inPremium: true
      }
    ];
  }
}
