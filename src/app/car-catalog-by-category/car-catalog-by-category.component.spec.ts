import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCatalogByCategoryComponent } from './car-catalog-by-category.component';

describe('CarCatalogByCategoryComponent', () => {
  let component: CarCatalogByCategoryComponent;
  let fixture: ComponentFixture<CarCatalogByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCatalogByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCatalogByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
