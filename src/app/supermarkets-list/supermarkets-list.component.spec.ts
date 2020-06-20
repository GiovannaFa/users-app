import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketsListComponent } from './supermarkets-list.component';

describe('SupermarketsListComponent', () => {
  let component: SupermarketsListComponent;
  let fixture: ComponentFixture<SupermarketsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
