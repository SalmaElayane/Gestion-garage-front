import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvehiculesComponent } from './addvehicules.component';

describe('AddvehiculesComponent', () => {
  let component: AddvehiculesComponent;
  let fixture: ComponentFixture<AddvehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvehiculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
