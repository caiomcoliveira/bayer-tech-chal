import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mockFarmer1 } from 'src/app/mocks/mocks';
import { Farmer } from 'src/app/models/Farmer';
import { FarmerSearchParams } from 'src/app/models/FarmerSearchParams';
import { FarmerSearchAbstractProvider } from '../abstracts/FarmerSearchAbstractProvider';

@Injectable({
  providedIn: 'root'
})
export class FarmerSearchProvider implements FarmerSearchAbstractProvider {

  public searchFarmers(params: FarmerSearchParams): Promise<Farmer[]> {
    return this.httpClient.get<Farmer[]>('url').toPromise();
  }

  constructor(private httpClient: HttpClient) { }
}
