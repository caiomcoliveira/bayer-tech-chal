import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay} from 'rxjs/operators';
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
  
  constructor(private httpClient: HttpClient) { }

  /**
   * 
   * @param params Parameters in which to search
   * @returns a promise with a list of farmers
   */
  public searchFarmers(params: FarmerSearchParams): Promise<Farmer[]> {
    return this.httpClient.get<Farmer[]>(this.serviceUrl, { params: { ...params } }).pipe(delay(1000)).toPromise();
  }

}
