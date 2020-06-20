import { TestBed } from '@angular/core/testing';

import { ShowProductsService } from './show-products.service';

describe('ShowProductsService', () => {
  let service: ShowProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
