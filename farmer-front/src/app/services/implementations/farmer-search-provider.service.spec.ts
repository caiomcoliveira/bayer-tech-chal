import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockFarmer1, mockFarmer2 } from 'src/app/mocks/mocks';

import { FarmerSearchProvider } from './farmer-search.provider';

describe('FarmerSearchProvider', () => {
  let service: FarmerSearchProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(FarmerSearchProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return farmer list', () => {
    const http = TestBed.inject(HttpClient);
    spyOn(http, 'get').and.returnValue(of([mockFarmer1, mockFarmer2]));
    service.searchFarmers({ search: 'mock' });
    expect(http.get).toHaveBeenCalled();
  });

});
