import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { StockQuote } from '../../core/models/stock-quote';
import { StockMarketService } from '../../core/services/stock-market.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  public dataSource = new MatTableDataSource<StockQuote>();
  public displayedColumns: string[] = [
    'companyName',
    'symbol',
    'latestPrice',
    'change',
    'primaryExchange',
  ];

  constructor(private readonly stockMarketService: StockMarketService) {}

  public ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.stockMarketService.getHealthCareStocks$().subscribe(stocks => {
      this.dataSource.data = stocks;
    });
  }
}
