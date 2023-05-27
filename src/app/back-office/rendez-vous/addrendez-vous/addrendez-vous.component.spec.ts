import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrendezVousComponent } from './addrendez-vous.component';

describe('AddrendezVousComponent', () => {
  let component: AddrendezVousComponent;
  let fixture: ComponentFixture<AddrendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
