import { TestBed } from '@angular/core/testing';

import { UserRegisterDataService } from './user-register-data.service';

describe('UserRegisterDataService', () => {
  let service: UserRegisterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegisterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
