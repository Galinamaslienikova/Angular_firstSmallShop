import { TestBed } from '@angular/core/testing';

import { CleanCartService } from './clean-cart.service';

describe('CleanCartService', () => {
  let service: CleanCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
