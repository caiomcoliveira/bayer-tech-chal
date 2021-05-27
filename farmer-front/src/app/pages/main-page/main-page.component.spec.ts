import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmerSearchCardComponent } from 'src/app/components/farmer-search-card/farmer-search-card.component';
import { mockFarmer1 } from 'src/app/mocks/mocks';
import { FarmerSearchProvider } from 'src/app/services/implementations/farmer-search.provider';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageComponent, FarmerSearchCardComponent ],
      providers: [{provide: FarmerSearchProvider, useValue: {}}]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call mySelectFarmer', ()=> {
      component.mySelectedFarmer(mockFarmer1);
  })
});
