import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatediagnosticComponent } from './updatediagnostic.component';

describe('UpdatediagnosticComponent', () => {
  let component: UpdatediagnosticComponent;
  let fixture: ComponentFixture<UpdatediagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatediagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatediagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
