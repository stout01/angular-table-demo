import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { StockQuote } from '../../core/models/stock-quote';
import { StockMarketService } from '../../core/services/stock-market.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  public stock$: Observable<StockQuote[]>;

  public columns = [
    { name: 'CompanyName', prop: 'companyName' },
    { name: 'Symbol', prop: 'symbol' },
    { name: 'Latest Price', prop: 'latestPrice' },
    { name: 'Change', prop: 'change' },
    { name: 'Exchange', prop: 'primaryExchange' },
  ];

  constructor(private readonly stockMarketService: StockMarketService) {}

  public ngOnInit() {
    this.stock$ = this.stockMarketService.getHealthCareStocks$();
  }
}
