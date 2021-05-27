import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { mockFarmer1 } from 'src/app/mocks/mocks';
import { FarmerSearchProvider } from 'src/app/services/implementations/farmer-search.provider';

import { FarmerSearchCardComponent } from './farmer-search-card.component';

describe('FarmerSearchCardComponent', () => {
  let component: FarmerSearchCardComponent;
  let fixture: ComponentFixture<FarmerSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmerSearchCardComponent],
      imports: [
        MatCardModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        NoopAnimationsModule
      ],
      providers: [
        {provide: FarmerSearchProvider, useValue: {searchFarmers: ()=>null}}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSearchCardComponent);
    component = fixture.componentInstance;
    component.farmerSearchAbstractProvider = TestBed.inject(FarmerSearchProvider);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search and find return a farmers information', fakeAsync(() => {

    spyOn(component.farmerSearchAbstractProvider, 'searchFarmers').and.returnValue(Promise.resolve([mockFarmer1]));
    spyOn(component.onPartnerSelectedEvent, 'emit').and.callFake(()=>null);


    component.searchQuery = 'Mock';
    component.search();
    tick();
    fixture.detectChanges();

    expect(component.farmerSearchAbstractProvider.searchFarmers).toHaveBeenCalled();
    expect(component.noResultsFound).toBe(false);
    expect(component.searchResult).toBeDefined();
    expect(component.onPartnerSelectedEvent.emit).toHaveBeenCalled();
    expect(component.searchQuery).toBe('');

  }));

  it('Should show no results found when service returns empty array', fakeAsync(()=>{
    spyOn(component.farmerSearchAbstractProvider, 'searchFarmers').and.returnValue(Promise.resolve([]));
    spyOn(component.onPartnerSelectedEvent, 'emit').and.callFake(()=>null);


    component.searchQuery = 'Mock';
    component.search();
    tick();

    expect(component.farmerSearchAbstractProvider.searchFarmers).toHaveBeenCalled();
    expect(component.noResultsFound).toBe(true);
    expect(component.searchResult).toBeFalsy();
    expect(component.onPartnerSelectedEvent.emit).toHaveBeenCalled();
    expect(component.searchQuery).toBe('');

    fixture.detectChanges();
    const text = fixture.debugElement.query(By.css('#no-results-found')).nativeElement;
    expect(text.innerHTML).toContain('No results found');
  }));

  
  it('Should show no results found when service fails', fakeAsync(()=>{
    spyOn(component.farmerSearchAbstractProvider, 'searchFarmers').and.returnValue(Promise.reject([]));
    spyOn(component.onPartnerSelectedEvent, 'emit').and.callFake(()=>null);


    component.searchQuery = 'Mock';
    component.search();
    tick();

    expect(component.farmerSearchAbstractProvider.searchFarmers).toHaveBeenCalled();
    expect(component.noResultsFound).toBe(true);
    expect(component.searchResult).toBeFalsy();
    expect(component.onPartnerSelectedEvent.emit).toHaveBeenCalled();
    expect(component.searchQuery).toBe('');

    fixture.detectChanges();
    const text = fixture.debugElement.query(By.css('#no-results-found')).nativeElement;
    expect(text.innerHTML).toContain('No results found');
  }));
});
