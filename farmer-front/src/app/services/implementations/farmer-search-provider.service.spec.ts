import { TestBed } from '@angular/core/testing';

import { FarmerSearchProvider } from './farmer-search.provider';

describe('FarmerSearchProviderService', () => {
  let service: FarmerSearchProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerSearchProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
