import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FarmerSearchCardComponent } from 'src/app/components/farmer-search-card/farmer-search-card.component';
import { mockFarmer1 } from 'src/app/mocks/mocks';
import { FarmerSearchProvider } from 'src/app/services/implementations/farmer-search.provider';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent, FarmerSearchCardComponent],
      imports: [
        MatCardModule,
        MatInputModule,
        NoopAnimationsModule,
        FormsModule,
        MatIconModule,],
      providers: [{ provide: FarmerSearchProvider, useValue: {} }]

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

  it('Should call mySelectFarmer', () => {
    component.mySelectedFarmer(mockFarmer1);
    expect(true).toBe(true); // TODO: Change when the mySelectedFarmer do something
  })
});
