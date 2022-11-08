import { TestBed } from '@angular/core/testing';

import { CheckAdminLoginService } from './check-admin-login.service';

describe('CheckAdminLoginService', () => {
  let service: CheckAdminLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAdminLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
