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
  constructor(private readonly stockMarketService: StockMarketService) {}

  public stocks: Observable<StockQuote[]>;
  public defaultColumnDefinition = { sortable: true, resizable: true };
  public columnDefinitions = [
    { headerName: 'CompanyName', field: 'companyName' },
    { headerName: 'Symbol', field: 'symbol' },
    { headerName: 'Latest Price', field: 'latestPrice' },
    { headerName: 'Change', field: 'change' },
    { headerName: 'Exchange', field: 'primaryExchange' },
  ];

  public ngOnInit() {
    this.stocks = this.stockMarketService.getHealthCareStocks$();
  }

  public onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
}
