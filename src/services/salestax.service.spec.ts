import { TestBed } from '@angular/core/testing';

import { SalestaxService } from './salestax.service';

describe('SalestaxService', () => {
  let service: SalestaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalestaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
