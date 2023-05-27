import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevehiculesComponent } from './updatevehicules.component';

describe('UpdatevehiculesComponent', () => {
  let component: UpdatevehiculesComponent;
  let fixture: ComponentFixture<UpdatevehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevehiculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
