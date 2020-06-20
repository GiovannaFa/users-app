import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCenterComponent } from './products-center.component';

describe('ProductsCenterComponent', () => {
  let component: ProductsCenterComponent;
  let fixture: ComponentFixture<ProductsCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
