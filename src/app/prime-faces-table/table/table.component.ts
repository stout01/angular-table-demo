import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { StockMarketService } from './../../core/services/stock-market.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  public columns = [
    { header: 'CompanyName', field: 'companyName' },
    { header: 'Symbol', field: 'symbol' },
    { header: 'Latest Price', field: 'latestPrice' },
    { header: 'Change', field: 'change' },
    { header: 'Exchange', field: 'primaryExchange' },
  ];

  public stocks;

  constructor(private readonly stockMarketService: StockMarketService) {}

  public ngOnInit() {
    this.stocks = this.stockMarketService.getHealthCareStocks$();
  }
}
