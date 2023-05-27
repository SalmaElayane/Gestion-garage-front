import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeComponent } from './addemploye.component';

describe('AddemployeComponent', () => {
  let component: AddEmployeComponent;
  let fixture: ComponentFixture<AddEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
