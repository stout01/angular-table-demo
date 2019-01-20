import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StockQuote } from '../models/stock-quote';

@Injectable({
  providedIn: 'root',
})
export class StockMarketService {
  private readonly baseUrl = 'https://api.iextrading.com/1.0';
  constructor(private readonly http: HttpClient) {}

  public getHealthCareStocks$(): Observable<Array<StockQuote>> {
    return this.http.get<Array<StockQuote>>(
      `${this.baseUrl}/stock/market/collection/sector?collectionName=Health%20Care`,
    );
  }
}
