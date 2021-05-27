import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/Farmer';
import { FarmerSearchProvider } from 'src/app/services/implementations/farmer-search.provider';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {


  constructor(public myFarmerSearchProvider: FarmerSearchProvider) { }


  public mySelectedFarmer(event: Farmer): void {
    console.log(event);
  }

}
