import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { StockQuote } from '../models/stock-quote';

@Injectable({
  providedIn: 'root',
})
export class StockMarketService {
  public getHealthCareStocks$(): Observable<Array<StockQuote>> {
    return of([
      {
        symbol: 'UNH',
        companyName: 'UnitedHealth Group Incorporated',
        latestPrice: 302.78,
        change: -2.45,
        primaryExchange: 'NYSE',
      },
      {
        symbol: 'PFE',
        companyName: 'Pfizer Inc.',
        latestPrice: 38.48,
        change: -0.26,
        primaryExchange: 'NYSE',
      },
    ]);
  }
}
