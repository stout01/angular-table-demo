import { Component, ViewEncapsulation } from '@angular/core';
import { from, SmartTable } from 'smart-table-ng';

import { StockMarketService } from '../../core/services/stock-market.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: SmartTable,
      useFactory: (stockMarketService: StockMarketService) =>
        from(stockMarketService.getHealthCareStocks$(), {
          search: {},
          filter: {},
          sort: {
            pointer: 'companyName',
            direction: 'asc',
          },
          slice: {
            page: 1,
            size: 10,
          },
        }),
      deps: [StockMarketService],
    },
  ],
})
export class TableComponent {}
