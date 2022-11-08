import { TestBed } from '@angular/core/testing';

import { RefreshAmountService } from './refresh-amount.service';

describe('RefreshAmountService', () => {
  let service: RefreshAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
