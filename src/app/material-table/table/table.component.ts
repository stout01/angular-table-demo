import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { StockQuote } from '../../core/models/stock-quote';
import { StockMarketService } from '../../core/services/stock-market.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) public sort: MatSort;

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
