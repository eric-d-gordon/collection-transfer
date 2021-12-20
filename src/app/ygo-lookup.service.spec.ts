import { TestBed } from '@angular/core/testing';

import { YgoLookupService } from './ygo-lookup.service';

describe('YgoLookupService', () => {
  let service: YgoLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YgoLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
