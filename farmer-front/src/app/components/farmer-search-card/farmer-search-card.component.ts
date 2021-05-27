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
  @Output() onPartnerSelectedEvent = new EventEmitter<Farmer>();
  public searchResult: Farmer;
  public searchQuery: FarmerSearchParams;

  constructor() { }


  public search(): void {
    this.farmerSearchAbstractProvider.searchFarmers({ query: 'asd' }).then(
      (r) => {
        this.searchResult = r.length > 0 ? r[0] : null;
        this.onPartnerSelectedEvent.emit(this.searchResult);
      }
    );
  }

  public formatedAdress(farmer: Farmer): string {
    return `${farmer.address.address} , ${farmer.address.street} (${farmer.address.country} - ${farmer.address.state})`;
  }


}
