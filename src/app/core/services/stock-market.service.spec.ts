import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { StockMarketService } from './stock-market.service';

describe('StockMarketService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientTestingModule] }));

  it('should be created', () => {
    const service: StockMarketService = TestBed.get(StockMarketService);
    expect(service).toBeTruthy();
  });
});
