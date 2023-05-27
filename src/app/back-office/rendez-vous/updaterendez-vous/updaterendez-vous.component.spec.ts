import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterendezVousComponent } from './updaterendez-vous.component';

describe('UpdaterendezVousComponent', () => {
  let component: UpdaterendezVousComponent;
  let fixture: ComponentFixture<UpdaterendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
