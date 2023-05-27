import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtacheComponent } from './addtache.component';

describe('AddtacheComponent', () => {
  let component: AddtacheComponent;
  let fixture: ComponentFixture<AddtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
