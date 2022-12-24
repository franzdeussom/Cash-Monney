import { TestBed } from '@angular/core/testing';

import { TmpDataUsersService } from './tmp-data-users.service';

describe('TmpDataUsersService', () => {
  let service: TmpDataUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmpDataUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
