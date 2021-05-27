import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mockFarmer1 } from 'src/app/mocks/mocks';
import { Farmer } from 'src/app/models/Farmer';
import { FarmerSearchParams } from 'src/app/models/FarmerSearchParams';
import { environment } from 'src/environments/environment';
import { FarmerSearchAbstractProvider } from '../abstracts/FarmerSearchAbstractProvider';

@Injectable({
  providedIn: 'root'
})
export class FarmerSearchProvider implements FarmerSearchAbstractProvider {

  public readonly serviceUrl: string = `${environment.apiUrl}/farmers`

  public searchFarmers(params: FarmerSearchParams): Promise<Farmer[]> {
    return this.httpClient.get<Farmer[]>(this.serviceUrl, { params: { ...params } }).toPromise();
  }

  constructor(private httpClient: HttpClient) { }
}
