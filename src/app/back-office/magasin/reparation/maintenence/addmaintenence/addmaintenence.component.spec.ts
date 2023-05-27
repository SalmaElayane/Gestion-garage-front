import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaintenenceComponent } from './addmaintenence.component';

describe('AddmaintenenceComponent', () => {
  let component: AddmaintenenceComponent;
  let fixture: ComponentFixture<AddmaintenenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmaintenenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmaintenenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
