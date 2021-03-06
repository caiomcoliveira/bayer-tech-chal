import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Farmer } from 'src/app/models/Farmer';
import { FarmerSearchParams } from 'src/app/models/FarmerSearchParams';
import { FarmerSearchAbstractProvider } from 'src/app/services/abstracts/FarmerSearchAbstractProvider';

@Component({
  selector: 'app-farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.scss']
})
export class FarmerSearchCardComponent {

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() partnerSelectedEvent = new EventEmitter<Farmer>();
  public searchResult: Farmer;
  public searchQuery: string;
  public noResultsFound = false;
  public isLoading = false;
  public isError = false;

  constructor() { }


  public search(): void {
    this.noResultsFound = false;
    this.searchResult = null;
    this.isLoading = true;
    this.isError = false;
    this.farmerSearchAbstractProvider.searchFarmers({ search: this.searchQuery }).then(
      (r) => {
        this.isLoading = false;
        if (r.length > 0) {
          this.searchResult = r[0];
        }
        else {
          this.noResultsFound = true;
        }
        this.partnerSelectedEvent.emit(this.searchResult);
      },
      (e) => {
        this.isError = true;
        this.isLoading = false;
        this.noResultsFound = true;
        this.partnerSelectedEvent.emit(this.searchResult);
      }
    );
  }

  public formattedAddress(farmer: Farmer): string {
    return `${farmer.address.address} , ${farmer.address.street} (${farmer.address.country} - ${farmer.address.state})`;
  }


}
