import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddiagnosticComponent } from './adddiagnostic.component';

describe('AdddiagnosticComponent', () => {
  let component: AdddiagnosticComponent;
  let fixture: ComponentFixture<AdddiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
